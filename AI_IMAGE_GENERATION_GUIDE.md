# AI Medical Illustration Generation Guide

This guide explains how to generate AI-illustrated medical-style educational images for all dental treatments on your website.

## Overview

The system includes:
- **Prompt templates** (`lib/ai-image-prompts.ts`) - Detailed prompts for each treatment
- **Generation script** (`scripts/generate-treatment-images.ts`) - Automated image generation
- **Medical illustrations** (`lib/medical-illustrations.ts`) - SVG fallbacks (already implemented)

## Image Requirements

- **Resolution**: 1200 × 800 px (PNG format)
- **Style**: Realistic medical advertising style with human context and anatomical overlays
- **Color Palette**: Teal, white, mint green tones
- **Aesthetic**: Professional dental clinic - bright, clean, hygienic feel
- **Content**: Human presence (dentist, patient, or partial face) blended with anatomical illustrations or transparent overlays
- **Format**: PNG, no watermark, no text labels
- **Lighting**: Consistent lighting and mood across all treatment images
- **Style Reference**: Similar to dental hospital website marketing images

## Setup

### 1. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 2. Set Up OpenAI API Key

Create a `.env` file in the project root:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. Run Image Generation

#### Generate All Images
```bash
npm run generate-images
# or
ts-node scripts/generate-treatment-images.ts
```

#### Generate Single Image
```bash
npm run generate-images single tmj-disorders-tmd
# or
ts-node scripts/generate-treatment-images.ts single tmj-disorders-tmd
```

#### Generate by Category
```bash
npm run generate-images category Orthodontics
# or
ts-node scripts/generate-treatment-images.ts category Orthodontics
```

#### List All Treatments
```bash
npm run generate-images list
# or
ts-node scripts/generate-treatment-images.ts list
```

## Alternative Image Generation Services

If you prefer not to use OpenAI DALL-E, you can use other services:

### Midjourney
1. Use the prompts from `lib/ai-image-prompts.ts`
2. Add `--ar 3:2` for 1200x800 aspect ratio
3. Add `--style medical` or `--style anatomical`
4. Manually download and save images to `public/medical-illustrations/`

### Stable Diffusion
1. Use prompts from `lib/ai-image-prompts.ts`
2. Use medical/anatomical model (e.g., "Medical Illustration" LoRA)
3. Set resolution to 1200x800
4. Generate and save to `public/medical-illustrations/`

### Adobe Firefly
1. Use prompts from `lib/ai-image-prompts.ts`
2. Select "Medical Illustration" style
3. Set dimensions to 1200x800
4. Generate and export as PNG

## Image Organization

Generated images are saved to:
```
public/medical-illustrations/
├── tmj-disorders-medical-illustration.png
├── wisdom-tooth-removal-medical-illustration.png
├── root-canal-treatment-medical-illustration.png
└── ...
```

## Using Generated Images

### Option 1: Update Treatment Data

Update `lib/treatment-data-all.ts` to use generated images:

```typescript
"orthodontics/tmj-disorders-tmd": {
  title: "TMJ Disorders / TMD",
  heroImage: "/medical-illustrations/tmj-disorders-medical-illustration.png",
  // ...
}
```

### Option 2: Update Medical Illustrations Function

Modify `lib/medical-illustrations.ts` to return PNG paths instead of SVG:

```typescript
export function getMedicalIllustration(treatmentSlug: string, treatmentName: string): string {
  const slug = treatmentSlug.toLowerCase()
  
  // Check if PNG image exists
  const imagePath = `/medical-illustrations/${slug}-medical-illustration.png`
  if (fs.existsSync(path.join(process.cwd(), 'public', imagePath))) {
    return imagePath
  }
  
  // Fallback to SVG generation
  return generateTMJIllustration() // or appropriate SVG
}
```

## Cost Estimation

### OpenAI DALL-E 3 Pricing (as of 2024)
- **Standard quality**: $0.040 per image
- **HD quality**: $0.080 per image

For ~60 treatments:
- Standard: ~$2.40
- HD: ~$4.80

## Quality Control

After generating images, review each one to ensure:
1. ✅ Realistic medical advertising style (professional dental clinic aesthetic)
2. ✅ Human context present (dentist, patient, or partial face) where relevant and tasteful
3. ✅ Anatomical overlays or transparent visualizations showing teeth, gums, or jaw structures
4. ✅ Teal, white, mint green color palette
5. ✅ Bright, clean, hygienic feel
6. ✅ 1200x800 resolution (or 1792x1024 from DALL-E, resized if needed)
7. ✅ No watermarks or text labels
8. ✅ Consistent lighting and mood across all images
9. ✅ Avoid overly clinical elements (surgical blood, pain expressions)
10. ✅ Trustworthy medical marketing style

## Troubleshooting

### API Key Issues
```
❌ OPENAI_API_KEY not found
```
**Solution**: Add `OPENAI_API_KEY=your_key` to `.env` file

### Rate Limiting
```
❌ Rate limit exceeded
```
**Solution**: The script includes 1-second delays between requests. For faster generation, you may need to upgrade your OpenAI plan.

### Image Quality
If images don't match the style:
1. Review the prompt in `lib/ai-image-prompts.ts`
2. Adjust the `BASE_STYLE` constant
3. Regenerate specific images

### Missing Images
If some treatments don't have prompts:
1. Check `lib/ai-image-prompts.ts`
2. Add missing treatments following the existing format
3. Run generation again

## Next Steps

1. ✅ Generate all images using the script
2. ✅ Review and approve each image
3. ✅ Update treatment data to use new images
4. ✅ Test on website to ensure proper display
5. ✅ Optimize images if needed (compression, WebP conversion)

## Support

For issues or questions:
- Check the prompts in `lib/ai-image-prompts.ts`
- Review the generation script in `scripts/generate-treatment-images.ts`
- Verify API key and permissions

