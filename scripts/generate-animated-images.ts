/**
 * AI Animated Image Generation Script for Dental Treatment Medical Illustrations
 * 
 * This script generates animated GIFs or videos for dental treatments
 * using AI video generation services like RunwayML, Pika Labs, or converts static images to GIFs.
 * 
 * Usage:
 *   npm run generate-animated-images
 *   or
 *   ts-node scripts/generate-animated-images.ts
 * 
 * Requirements:
 *   - API keys for video generation services (RunwayML, Pika Labs, etc.)
 *   - Node.js and TypeScript
 *   - For GIF conversion: ImageMagick or similar tool
 */

import fs from 'fs'
import path from 'path'
import { 
  TREATMENT_IMAGE_PROMPTS, 
  TreatmentImagePrompt,
  getTreatmentsWithAnimatedPrompts,
  generateAnimatedPromptForTreatment
} from '../lib/ai-image-prompts'

// Configuration
const OUTPUT_DIR = path.join(process.cwd(), 'public', 'medical-illustrations', 'animated')
const STATIC_IMAGES_DIR = path.join(process.cwd(), 'public', 'medical-illustrations')

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

/**
 * Generate animated image using RunwayML Gen-2 API
 * Note: This requires a RunwayML API key
 */
async function generateAnimatedWithRunway(
  prompt: string,
  fileName: string,
  staticImagePath?: string
): Promise<string | null> {
  const apiKey = process.env.RUNWAY_API_KEY
  
  if (!apiKey) {
    console.warn('⚠️  RUNWAY_API_KEY not found. Skipping RunwayML generation.')
    console.warn('   To use RunwayML, add RUNWAY_API_KEY=your_key_here to your .env file')
    return null
  }

  try {
    console.log(`\n🎬 Generating animated: ${fileName}`)
    console.log(`   Prompt: ${prompt.substring(0, 100)}...`)

    // RunwayML Gen-2 API endpoint
    const response = await fetch('https://api.runwayml.com/v1/image-to-video', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        image: staticImagePath ? `data:image/png;base64,${fs.readFileSync(staticImagePath).toString('base64')}` : undefined,
        prompt: prompt,
        duration: 5, // 5 seconds
        aspect_ratio: '16:9'
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error(`   ❌ Error: ${error.error?.message || JSON.stringify(error)}`)
      return null
    }

    const data = await response.json()
    const videoUrl = data.video_url

    if (!videoUrl) {
      console.error(`   ❌ No video URL in response`)
      return null
    }

    // Download the video
    const videoResponse = await fetch(videoUrl)
    const videoBuffer = await videoResponse.arrayBuffer()
    const outputPath = path.join(OUTPUT_DIR, fileName.replace('.gif', '.mp4'))
    
    fs.writeFileSync(outputPath, Buffer.from(videoBuffer))
    console.log(`   ✅ Saved: ${outputPath}`)
    
    // Convert to GIF if needed (requires ffmpeg or similar)
    // This is optional - you can use MP4 directly in the website
    
    return outputPath
  } catch (error) {
    console.error(`   ❌ Error generating animated image: ${error}`)
    return null
  }
}

/**
 * Generate animated image using Pika Labs API
 * Note: This requires a Pika Labs API key
 */
async function generateAnimatedWithPika(
  prompt: string,
  fileName: string
): Promise<string | null> {
  const apiKey = process.env.PIKA_API_KEY
  
  if (!apiKey) {
    console.warn('⚠️  PIKA_API_KEY not found. Skipping Pika Labs generation.')
    return null
  }

  try {
    console.log(`\n🎬 Generating animated: ${fileName}`)
    console.log(`   Prompt: ${prompt.substring(0, 100)}...`)

    const response = await fetch('https://api.pika.art/v1/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        duration: 5,
        aspect_ratio: '16:9'
      })
    })

    if (!response.ok) {
      const error = await response.json()
      console.error(`   ❌ Error: ${error.error?.message || JSON.stringify(error)}`)
      return null
    }

    const data = await response.json()
    const videoUrl = data.video_url

    if (!videoUrl) {
      console.error(`   ❌ No video URL in response`)
      return null
    }

    // Download the video
    const videoResponse = await fetch(videoUrl)
    const videoBuffer = await videoResponse.arrayBuffer()
    const outputPath = path.join(OUTPUT_DIR, fileName.replace('.gif', '.mp4'))
    
    fs.writeFileSync(outputPath, Buffer.from(videoBuffer))
    console.log(`   ✅ Saved: ${outputPath}`)
    
    return outputPath
  } catch (error) {
    console.error(`   ❌ Error generating animated image: ${error}`)
    return null
  }
}

/**
 * Create animated GIF from static images using image sequence
 * This is a fallback method that creates a simple animated GIF
 * by duplicating and slightly modifying the static image
 */
async function createAnimatedGifFromStatic(
  staticImagePath: string,
  fileName: string
): Promise<string | null> {
  try {
    // This is a placeholder - in a real implementation, you would:
    // 1. Load the static image
    // 2. Create multiple frames with subtle variations (e.g., slight zoom, pan, brightness changes)
    // 3. Use a library like 'gifencoder' or 'sharp' to create the GIF
    // 4. Save the GIF to the output directory
    
    console.log(`\n🎬 Creating animated GIF from static: ${fileName}`)
    console.log(`   ⚠️  This is a placeholder. Install 'gifencoder' or use ImageMagick for actual GIF creation.`)
    
    // For now, just copy the static image as a placeholder
    const outputPath = path.join(OUTPUT_DIR, fileName)
    if (fs.existsSync(staticImagePath)) {
      fs.copyFileSync(staticImagePath, outputPath)
      console.log(`   ✅ Placeholder saved: ${outputPath}`)
      return outputPath
    }
    
    return null
  } catch (error) {
    console.error(`   ❌ Error creating animated GIF: ${error}`)
    return null
  }
}

/**
 * Generate animated images for all treatments
 */
async function generateAllAnimatedImages(
  treatments?: string[],
  category?: string,
  useStaticFallback: boolean = true
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

  // Generate animated prompts for treatments that don't have them
  promptsToGenerate = promptsToGenerate.map(treatment => {
    if (!treatment.animatedPrompt) {
      return generateAnimatedPromptForTreatment(treatment)
    }
    return treatment
  })

  console.log(`\n📋 Generating ${promptsToGenerate.length} animated medical illustrations...`)
  console.log(`   Output directory: ${OUTPUT_DIR}\n`)

  let successCount = 0
  let failCount = 0
  let skippedCount = 0

  for (const prompt of promptsToGenerate) {
    if (!prompt.animatedPrompt || !prompt.animatedFileName) {
      console.log(`⏭️  Skipping ${prompt.treatmentName} (no animated prompt)`)
      skippedCount++
      continue
    }

    // Check if animated image already exists
    const existingPath = path.join(OUTPUT_DIR, prompt.animatedFileName)
    if (fs.existsSync(existingPath)) {
      console.log(`⏭️  Skipping ${prompt.animatedFileName} (already exists)`)
      skippedCount++
      continue
    }

    // Try RunwayML first, then Pika, then static fallback
    let result: string | null = null
    
    // Check if static image exists for image-to-video generation
    const staticImagePath = path.join(STATIC_IMAGES_DIR, prompt.fileName)
    const hasStaticImage = fs.existsSync(staticImagePath)

    // Try RunwayML (image-to-video if static exists, otherwise text-to-video)
    if (hasStaticImage) {
      result = await generateAnimatedWithRunway(
        prompt.animatedPrompt,
        prompt.animatedFileName,
        staticImagePath
      )
    }

    // Try Pika Labs if RunwayML failed
    if (!result) {
      result = await generateAnimatedWithPika(
        prompt.animatedPrompt,
        prompt.animatedFileName
      )
    }

    // Fallback to static image conversion if both APIs fail
    if (!result && useStaticFallback && hasStaticImage) {
      result = await createAnimatedGifFromStatic(
        staticImagePath,
        prompt.animatedFileName
      )
    }
    
    if (result) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: wait 2 seconds between requests
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  console.log(`\n✅ Generation complete!`)
  console.log(`   Success: ${successCount}`)
  console.log(`   Failed: ${failCount}`)
  console.log(`   Skipped: ${skippedCount}`)
  console.log(`   Total: ${promptsToGenerate.length}`)
}

/**
 * Generate a single animated image by slug or name
 */
async function generateSingleAnimatedImage(slugOrName: string): Promise<void> {
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

  const treatmentWithAnimated = generateAnimatedPromptForTreatment(prompt)
  await generateAllAnimatedImages([slugOrName])
}

// CLI interface
const args = process.argv.slice(2)
const command = args[0]

if (command === 'single' && args[1]) {
  generateSingleAnimatedImage(args[1])
} else if (command === 'category' && args[1]) {
  generateAllAnimatedImages(undefined, args[1])
} else if (command === 'list') {
  console.log('\n📋 Available treatments with animated prompts:\n')
  getTreatmentsWithAnimatedPrompts().forEach((p, i) => {
    console.log(`${i + 1}. ${p.treatmentName} (${p.category})`)
    console.log(`   Slug: ${p.slug}`)
    console.log(`   Animated File: ${p.animatedFileName}\n`)
  })
} else {
  // Generate all animated images
  generateAllAnimatedImages()
}

export { generateAllAnimatedImages, generateSingleAnimatedImage }





