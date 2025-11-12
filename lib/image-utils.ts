/**
 * Image Utility Functions
 * Helper functions for managing medical illustration images
 * 
 * Note: This file contains both client-safe and server-only functions.
 * Server-only functions use dynamic imports to avoid bundling Node.js modules in client code.
 */

import { getTreatmentPrompt } from './ai-image-prompts'

/**
 * Get the expected PNG image path for a treatment
 */
export function getMedicalImagePath(treatmentSlug: string, treatmentName?: string): string {
  const prompt = getTreatmentPrompt(treatmentSlug, treatmentName || '')
  
  if (prompt) {
    return `/medical-illustrations/${prompt.fileName}`
  }
  
  // Fallback: construct from slug
  const slug = treatmentSlug.toLowerCase().replace(/\//g, '-')
  return `/medical-illustrations/${slug}-medical-illustration.png`
}

/**
 * Check if PNG image exists (server-side only)
 */
export function medicalImageExists(treatmentSlug: string, treatmentName?: string): boolean {
  if (typeof window !== 'undefined') {
    // Client-side: can't check file system
    return false
  }
  
  // Dynamic import for server-only modules
  const fs = require('fs')
  const path = require('path')
  
  const imagePath = getMedicalImagePath(treatmentSlug, treatmentName)
  const publicPath = path.join(process.cwd(), 'public', imagePath)
  
  return fs.existsSync(publicPath)
}

/**
 * Get all available medical illustration images (server-side only)
 */
export function getAllMedicalImages(): string[] {
  if (typeof window !== 'undefined') {
    return []
  }
  
  // Dynamic import for server-only modules
  const fs = require('fs')
  const path = require('path')
  
  const illustrationsDir = path.join(process.cwd(), 'public', 'medical-illustrations')
  
  if (!fs.existsSync(illustrationsDir)) {
    return []
  }
  
  return fs.readdirSync(illustrationsDir)
    .filter((file: string) => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'))
    .map((file: string) => `/medical-illustrations/${file}`)
}

/**
 * Get the expected animated image path for a treatment
 * Client-safe function - doesn't use server-only modules
 */
export function getAnimatedMedicalImagePath(treatmentSlug: string, treatmentName?: string): string | null {
  try {
    // Try to get the prompt (works on both client and server)
    const prompt = getTreatmentPrompt(treatmentSlug, treatmentName || '')
    
    if (prompt && prompt.animatedFileName) {
      return `/medical-illustrations/animated/${prompt.animatedFileName}`
    }
  } catch (error) {
    // If getTreatmentPrompt fails (e.g., in client), fall back to slug-based path
  }
  
  // Fallback: construct from slug (works on both client and server)
  const slug = treatmentSlug.toLowerCase().replace(/\//g, '-')
  return `/medical-illustrations/animated/${slug}-medical-illustration-animated.gif`
}

/**
 * Check if animated image exists (server-side only)
 */
export function animatedMedicalImageExists(treatmentSlug: string, treatmentName?: string): boolean {
  if (typeof window !== 'undefined') {
    // Client-side: can't check file system
    return false
  }
  
  // Dynamic import for server-only modules
  const fs = require('fs')
  const path = require('path')
  
  const imagePath = getAnimatedMedicalImagePath(treatmentSlug, treatmentName)
  if (!imagePath) {
    return false
  }
  
  const publicPath = path.join(process.cwd(), 'public', imagePath)
  
  return fs.existsSync(publicPath)
}

