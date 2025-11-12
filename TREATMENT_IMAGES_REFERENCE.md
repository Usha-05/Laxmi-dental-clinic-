# Treatment Images Reference

Quick reference for all dental treatment medical illustrations.

## Image Location
All generated images are stored in: `public/medical-illustrations/`

## Treatment Images List

### Orthodontics
| Treatment | Slug | Image File |
|-----------|------|------------|
| TMJ Disorders / TMD | `tmj-disorders-tmd` | `tmj-disorders-medical-illustration.png` |
| Functional Jaw Problems Correction | `functional-jaw-problems-correction` | `functional-jaw-problems-correction-medical-illustration.png` |
| Aligners / Invisalign | `aligners-invisalign` | `aligners-invisalign-medical-illustration.png` |
| Traditional Braces | `traditional-braces` | `traditional-braces-medical-illustration.png` |
| Invisible Braces | `invisible-braces` | `invisible-braces-medical-illustration.png` |
| Surgical Orthodontics | `surgical-orthodontics` | `surgical-orthodontics-medical-illustration.png` |
| Sleep Apnea | `sleep-apnea` | `sleep-apnea-medical-illustration.png` |
| Airway Problems Correction | `airway-problems-correction` | `airway-problems-correction-medical-illustration.png` |
| Speech Problems Correction | `speech-problems-correction` | `speech-problems-correction-medical-illustration.png` |
| Functional Habits Correction | `functional-habits-correction` | `functional-habits-correction-medical-illustration.png` |
| Cleft Orthodontics | `cleft-orthodontics` | `cleft-orthodontics-medical-illustration.png` |

### Restorative Dentistry
| Treatment | Slug | Image File |
|-----------|------|------------|
| Root Canal Treatment | `root-canal-treatment` | `root-canal-treatment-medical-illustration.png` |
| Dental Implants | `dental-implants` | `dental-implants-medical-illustration.png` |
| Tooth Coloured Fillings | `tooth-coloured-fillings` | `tooth-coloured-fillings-medical-illustration.png` |
| Crowns & Bridges | `crowns-bridges` | `crowns-bridges-medical-illustration.png` |
| Dental Veneers / Laminates | `dental-veneers-laminates` | `dental-veneers-medical-illustration.png` |
| Dentures | `dentures` | `dentures-medical-illustration.png` |
| Full Mouth Prosthesis | `full-mouth-prosthesis` | `full-mouth-prosthesis-medical-illustration.png` |
| Teeth Sensitivity Treatment | `teeth-sensitivity-treatment` | `teeth-sensitivity-medical-illustration.png` |

### Surgical Treatments
| Treatment | Slug | Image File |
|-----------|------|------------|
| Wisdom Tooth Removal | `wisdom-tooth-removal` | `wisdom-tooth-removal-medical-illustration.png` |
| Tooth Removal | `tooth-removal` | `tooth-removal-medical-illustration.png` |
| Gums Treatment | `gums-treatment` | `gums-treatment-medical-illustration.png` |
| Cosmetic Jaw Surgery | `cosmetic-jaw-surgery` | `cosmetic-jaw-surgery-medical-illustration.png` |
| Orthognathic Surgery | `orthognathic-surgery` | `orthognathic-surgery-medical-illustration.png` |
| Tongue Tie Correction | `tongue-tie-correction` | `tongue-tie-correction-medical-illustration.png` |
| Frenectomy | `frenectomy` | `frenectomy-medical-illustration.png` |
| Operculectomy | `operculectomy` | `operculectomy-medical-illustration.png` |
| Sinus Lift | `sinus-lift` | `sinus-lift-medical-illustration.png` |
| Bone Grafting | `bone-grafting` | `bone-grafting-medical-illustration.png` |
| Apicoectomy | `apicoectomy` | `apicoectomy-medical-illustration.png` |
| Cyst Removal | `cyst-removal` | `cyst-removal-medical-illustration.png` |
| Alveoloplasty | `alveoloplasty` | `alveoloplasty-medical-illustration.png` |
| Biopsy | `biopsy` | `biopsy-medical-illustration.png` |
| Precancerous Lesions Evaluation | `precancerous-lesions-evaluation` | `precancerous-lesions-medical-illustration.png` |

### Pediatric Dentistry
| Treatment | Slug | Image File |
|-----------|------|------------|
| Pulpotomy | `pulpotomy` | `pulpotomy-medical-illustration.png` |
| Pulpectomy / RCT | `pulpectomy-rct` | `pulpectomy-medical-illustration.png` |
| Functional Jaw Problems Correction (Kids) | `functional-jaw-problems-correction-kids` | `functional-jaw-problems-correction-kids-medical-illustration.png` |
| Functional Habits Correction (Kids) | `functional-habits-correction-kids` | `functional-habits-correction-kids-medical-illustration.png` |
| Space Problems Treatment | `space-problems-treatment` | `space-problems-treatment-medical-illustration.png` |
| Tooth Fillings for Kids | `tooth-fillings-kids` | `tooth-fillings-kids-medical-illustration.png` |
| Pit & Fissure in Kids | `pit-fissure-kids` | `pit-fissure-sealants-medical-illustration.png` |
| Anti-Decay Fluoride Application (Kids) | `fluoride-application-kids` | `fluoride-application-kids-medical-illustration.png` |
| Tooth Removal in Kids | `tooth-removal-kids` | `tooth-removal-kids-medical-illustration.png` |
| Dental Emergencies (Kids) | `dental-emergencies-kids` | `dental-emergencies-kids-medical-illustration.png` |

### Preventive Treatments
| Treatment | Slug | Image File |
|-----------|------|------------|
| Teeth Whitening | `teeth-whitening` | `teeth-whitening-medical-illustration.png` |
| Anti-Decay Fluoride Application | `fluoride-application` | `fluoride-application-medical-illustration.png` |
| Teeth & Gums Cleaning | `teeth-gums-cleaning` | `teeth-cleaning-medical-illustration.png` |
| Scaling & Root Planing | `scaling-root-planing` | `scaling-root-planing-medical-illustration.png` |
| Pit & Fissure Sealants | `pit-fissure-sealants` | `pit-fissure-sealants-medical-illustration.png` |
| Pregnancy Dental Care | `pregnancy-dental-care` | `pregnancy-dental-care-medical-illustration.png` |
| Conscious Sedation | `conscious-sedation` | `conscious-sedation-medical-illustration.png` |
| Dental Emergencies (Preventive Context) | `dental-emergencies-preventive` | `dental-emergencies-medical-illustration.png` |

## Total Images
**60+ medical illustrations** covering all dental treatments

## Usage in Code

```typescript
import { getMedicalImagePath } from '@/lib/image-utils'

const imagePath = getMedicalImagePath('orthodontics/tmj-disorders-tmd', 'TMJ Disorders / TMD')
// Returns: '/medical-illustrations/tmj-disorders-medical-illustration.png'
```

## Generation Status

After running the generation script, check which images have been created:

```bash
ls public/medical-illustrations/
```





