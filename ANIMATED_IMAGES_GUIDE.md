# Animated AI-Generated Images Guide

This guide explains how to generate and use animated AI-generated images for dental treatment sub-items on your website.

## Overview

The system now supports animated images (GIFs or videos) for all dental treatments. These animated images provide a more engaging visual experience while maintaining the professional, clean aesthetic of the dental clinic website.

## Features

- ✅ Animated prompts for all treatments
- ✅ Automatic fallback to static images
- ✅ Support for GIF and video formats (MP4, WebM)
- ✅ Seamless integration with existing components
- ✅ Multiple AI service support (RunwayML, Pika Labs)

## File Structure

```
public/
  medical-illustrations/
    animated/
      tmj-disorders-medical-illustration-animated.gif
      pregnancy-dental-care-medical-illustration-animated.gif
      teeth-whitening-medical-illustration-animated.gif
      ...
```

## Setup

### 1. Install Dependencies

The animated image generation script uses the same dependencies as the static image generator. No additional packages are required.

### 2. Configure API Keys

Add API keys to your `.env` file:

```env
# For RunwayML Gen-2 (image-to-video or text-to-video)
RUNWAY_API_KEY=your_runway_api_key_here

# For Pika Labs (video generation)
PIKA_API_KEY=your_pika_api_key_here
```

**Note:** You can use either service, or both. The script will try RunwayML first, then Pika Labs, then fall back to static image conversion.

### 3. Generate Animated Images

#### Generate All Animated Images

```bash
npm run generate-animated-images
```

#### Generate for a Specific Treatment

```bash
npm run generate-animated-images single tmj-disorders-tmd
```

#### Generate for a Category

```bash
npm run generate-animated-images category Orthodontics
```

#### List Available Treatments

```bash
npm run generate-animated-images list
```

## How It Works

### 1. Animated Prompts

Each treatment now has an `animatedPrompt` and `animatedFileName` in addition to the static prompt. The animated prompts include instructions for subtle, professional movement:

- Gentle camera pan
- Soft focus transitions
- Tool movement
- Patient smile animations
- Breathing effects
- Duration: 3-5 seconds loop
- Seamless looping

### 2. Image Generation

The script supports multiple generation methods:

1. **RunwayML Gen-2** (Recommended)
   - Image-to-video: Uses existing static images
   - Text-to-video: Generates from scratch
   - High quality, professional results

2. **Pika Labs**
   - Text-to-video generation
   - Good quality, fast generation

3. **Static Image Conversion** (Fallback)
   - Creates animated GIFs from static images
   - Requires ImageMagick or similar tools
   - Lower quality but always available

### 3. Component Integration

The `AnimatedTreatmentImage` component automatically:
- Checks for animated image availability
- Falls back to static image if animated version doesn't exist
- Handles errors gracefully
- Supports both GIF and video formats

## Usage in Components

### Basic Usage

```tsx
import AnimatedTreatmentImage from "@/components/animated-treatment-image"

<AnimatedTreatmentImage
  treatmentSlug="tmj-disorders-tmd"
  treatmentName="TMJ Disorders / TMD"
  staticImagePath="/medical-illustrations/tmj-disorders-medical-illustration.png"
  alt="TMJ Disorders Treatment"
  className="w-full h-96 object-cover"
  width={600}
  height={400}
/>
```

### In Treatment Pages

The treatment page component (`treatment-page-content.tsx`) automatically uses animated images when available. No additional configuration needed.

## Adding Animated Prompts

### Automatic Generation

The system can automatically generate animated prompts for treatments that don't have them:

```typescript
import { generateAnimatedPromptForTreatment } from '@/lib/ai-image-prompts'

const treatment = TREATMENT_IMAGE_PROMPTS[0]
const withAnimated = generateAnimatedPromptForTreatment(treatment)
```

### Manual Addition

To manually add an animated prompt to a treatment:

```typescript
{
  treatmentName: "Your Treatment",
  category: "Your Category",
  slug: "your-treatment-slug",
  prompt: generateTreatmentPrompt("Your Treatment", "Static description"),
  fileName: "your-treatment-medical-illustration.png",
  animatedPrompt: generateAnimatedTreatmentPrompt(
    "Your Treatment",
    "Animated description with movement details"
  ),
  animatedFileName: "your-treatment-medical-illustration-animated.gif"
}
```

## Best Practices

1. **Animation Style**
   - Keep animations subtle and professional
   - Avoid distracting movements
   - Focus on gentle, calming motion
   - Maintain the clean dental clinic aesthetic

2. **Performance**
   - Use GIF for simple animations (< 5MB)
   - Use MP4/WebM for complex animations
   - Optimize file sizes before deployment
   - Consider lazy loading for below-the-fold images

3. **Accessibility**
   - Always provide static image fallback
   - Ensure animations don't cause motion sickness
   - Consider `prefers-reduced-motion` media query

4. **File Naming**
   - Follow the pattern: `{slug}-medical-illustration-animated.gif`
   - Keep filenames consistent with static images
   - Use lowercase with hyphens

## Troubleshooting

### Animated Images Not Showing

1. Check if animated images exist in `public/medical-illustrations/animated/`
2. Verify the file path matches the `animatedFileName` in prompts
3. Check browser console for loading errors
4. Ensure the component has correct `treatmentSlug`

### API Errors

1. Verify API keys are correct in `.env`
2. Check API rate limits
3. Ensure you have sufficient API credits
4. Try a different service (RunwayML vs Pika Labs)

### Generation Failures

1. Check network connection
2. Verify API keys are valid
3. Check API service status
4. Review error messages in console
5. Try generating a single image first

## Cost Estimation

### RunwayML Gen-2
- Image-to-video: ~$0.05 per video
- Text-to-video: ~$0.10 per video

### Pika Labs
- Text-to-video: ~$0.05-0.10 per video

For 60 treatments:
- Estimated cost: $3-6 (one-time generation)

## Next Steps

1. ✅ Generate animated images for all treatments
2. ✅ Review and approve each animated image
3. ✅ Optimize file sizes if needed
4. ✅ Test on website to ensure proper display
5. ✅ Monitor performance and user engagement

## Support

For issues or questions:
- Check the prompts in `lib/ai-image-prompts.ts`
- Review the generation script in `scripts/generate-animated-images.ts`
- Verify API keys and permissions
- Check component implementation in `components/animated-treatment-image.tsx`





