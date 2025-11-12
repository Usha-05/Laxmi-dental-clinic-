/**
 * AI Image Generation Script for Dental Treatment Medical Illustrations
 * 
 * This script generates medical-style educational images for all dental treatments
 * using OpenAI DALL-E 3 API or other AI image generation services.
 * 
 * Usage:
 *   npm run generate-images
 *   or
 *   ts-node scripts/generate-treatment-images.ts
 * 
 * Requirements:
 *   - OpenAI API key in .env file: OPENAI_API_KEY=your_key_here
 *   - Node.js and TypeScript
 */

import fs from 'fs'
import path from 'path'
import { TREATMENT_IMAGE_PROMPTS, TreatmentImagePrompt } from '../lib/ai-image-prompts'

// Configuration
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'medical-illustrations')
// DALL-E 3 supports: '1024x1024', '1792x1024' (landscape), '1024x1792' (portrait)
// Using landscape format closest to 1200x800 aspect ratio (1.75 vs 1.5)
const IMAGE_SIZE = '1792x1024' // Landscape format, can be cropped/resized to 1200x800 if needed
const QUALITY = 'hd' // 'standard' or 'hd'
const MODEL = 'dall-e-3' // 'dall-e-3' or 'dall-e-2'

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

/**
 * Generate image using OpenAI DALL-E API
 */
async function generateImageWithDALLE(
  prompt: string,
  fileName: string
): Promise<string | null> {
  const apiKey = process.env.OPENAI_API_KEY
  
  if (!apiKey) {
    console.error('❌ OPENAI_API_KEY not found in environment variables')
    console.error('   Please add OPENAI_API_KEY=your_key_here to your .env file')
    return null
  }

  try {
    console.log(`\n🖼️  Generating: ${fileName}`)
    console.log(`   Prompt: ${prompt.substring(0, 100)}...`)

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: prompt,
        size: IMAGE_SIZE,
        quality: QUALITY,
        n: 1
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error(`   ❌ Error: ${error.error?.message || JSON.stringify(error)}`)
      return null
    }

    const data = await response.json()
    const imageUrl = data.data[0]?.url

    if (!imageUrl) {
      console.error(`   ❌ No image URL in response`)
      return null
    }

    // Download the image
    const imageResponse = await fetch(imageUrl)
    const imageBuffer = await imageResponse.arrayBuffer()
    const outputPath = path.join(OUTPUT_DIR, fileName)
    
    fs.writeFileSync(outputPath, Buffer.from(imageBuffer))
    console.log(`   ✅ Saved: ${outputPath}`)
    
    return outputPath
  } catch (error) {
    console.error(`   ❌ Error generating image: ${error}`)
    return null
  }
}

/**
 * Generate images for all treatments
 */
async function generateAllImages(
  treatments?: string[],
  category?: string
): Promise<void> {
  let promptsToGenerate: TreatmentImagePrompt[] = TREATMENT_IMAGE_PROMPTS

  // Filter by category if specified
  if (category) {
    promptsToGenerate = promptsToGenerate.filter(p => 
      p.category.toLowerCase() === category.toLowerCase()
    )
  }

  // Filter by specific treatments if specified
  if (treatments && treatments.length > 0) {
    promptsToGenerate = promptsToGenerate.filter(p =>
      treatments.some(t => 
        p.slug.toLowerCase().includes(t.toLowerCase()) ||
        p.treatmentName.toLowerCase().includes(t.toLowerCase())
      )
    )
  }

  console.log(`\n📋 Generating ${promptsToGenerate.length} medical illustrations...`)
  console.log(`   Output directory: ${OUTPUT_DIR}\n`)

  let successCount = 0
  let failCount = 0

  for (const prompt of promptsToGenerate) {
    // Check if image already exists
    const existingPath = path.join(OUTPUT_DIR, prompt.fileName)
    if (fs.existsSync(existingPath)) {
      console.log(`⏭️  Skipping ${prompt.fileName} (already exists)`)
      continue
    }

    const result = await generateImageWithDALLE(prompt.prompt, prompt.fileName)
    
    if (result) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: wait 1 second between requests to avoid API limits
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n✅ Generation complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Failed: ${failCount}`)
  console.log(`   Total: ${promptsToGenerate.length}`)
}

/**
 * Generate a single image by slug or name
 */
async function generateSingleImage(slugOrName: string): Promise<void> {
  const prompt = TREATMENT_IMAGE_PROMPTS.find(p =>
    p.slug.toLowerCase() === slugOrName.toLowerCase() ||
    p.treatmentName.toLowerCase() === slugOrName.toLowerCase() ||
    p.slug.toLowerCase().includes(slugOrName.toLowerCase())
  )

  if (!prompt) {
    console.error(`❌ Treatment not found: ${slugOrName}`)
    console.log(`\nAvailable treatments:`)
    TREATMENT_IMAGE_PROMPTS.forEach(p => {
      console.log(`   - ${p.slug} (${p.treatmentName})`)
    })
    return
  }

  await generateAllImages([slugOrName])
}

// CLI interface
const args = process.argv.slice(2)
const command = args[0]

if (command === 'single' && args[1]) {
  generateSingleImage(args[1])
} else if (command === 'category' && args[1]) {
  generateAllImages(undefined, args[1])
} else if (command === 'list') {
  console.log('\n📋 Available treatments:\n')
  TREATMENT_IMAGE_PROMPTS.forEach((p, i) => {
    console.log(`${i + 1}. ${p.treatmentName} (${p.category})`)
    console.log(`   Slug: ${p.slug}`)
    console.log(`   File: ${p.fileName}\n`)
  })
} else {
  // Generate all images
  generateAllImages()
}

export { generateAllImages, generateSingleImage, generateImageWithDALLE }

