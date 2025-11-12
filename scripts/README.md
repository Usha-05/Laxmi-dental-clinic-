# Image Generation Scripts

## generate-treatment-images.ts

Automated script to generate AI medical illustrations for all dental treatments.

### Prerequisites

1. OpenAI API key in `.env` file:
   ```
   OPENAI_API_KEY=your_key_here
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Usage

```bash
# Generate all images
npm run generate-images

# Generate single image
npm run generate-images single tmj-disorders-tmd

# Generate by category
npm run generate-images category Orthodontics

# List all available treatments
npm run generate-images list
```

### Output

Images are saved to: `public/medical-illustrations/`

### Notes

- Script automatically skips images that already exist
- Includes 1-second delay between requests to avoid rate limits
- Uses DALL-E 3 HD quality by default
- See `AI_IMAGE_GENERATION_GUIDE.md` for detailed documentation





