// StarType - Allowed image types for star visuals
export type StarType =
  | "star1"
  | "star2"
  | "star3"
  | "star4"
  | "star5"
  | "star6";

// StarSize - Dimensions for each star type
export interface StarSize {
  width: number; // Width of the star image
  height: number; // Height of the star image
}

// starSizes - Maps star types to image dimensions
export const starSizes: Record<StarType, StarSize> = {
  star1: { width: 21, height: 21 }, // Default size for star1
  star2: { width: 21, height: 21 }, // Default size for star2
  star3: { width: 21, height: 20 }, // Slightly shorter height for star3
  star4: { width: 15, height: 15 }, // Smaller size for star4
  star5: { width: 3, height: 3 }, // Tiny star5
  star6: { width: 39, height: 66 }, // Special large star
};

// BaseParticleData - Common fields shared between image and pixel particles
export interface BaseParticleData {
  type: "image" | "pixel";
  marginLeft: string;
  marginTop: string;
  delay: string;
  distance: number;
  isMobile: boolean;
}

// ImageParticleData - Represents a particle using an image
export interface ImageParticleData extends BaseParticleData {
  type: "image";
  src: string;
  maxWidth: number;
}

// PixelParticleData - Represents a particle using a colored dot
export interface PixelParticleData extends BaseParticleData {
  type: "pixel";
  size: number;
  color: string;
}

// ParticleData - Union type of all possible particle variants
export type ParticleData = ImageParticleData | PixelParticleData;

// ParticleSize - Dimensions for each particle type
export interface ParticleSize {
  width: number; // Width of the particle image
  height: number; // Height of the particle image
}

// ParticleType - Types of particles available
export type ParticleType =
  | "particle-1"
  | "particle-2"
  | "particle-3"
  | "particle-4"
  | "particle-5"
  | "particle-6";

// particleSizes - Maps particle types to image dimensions
export const particleSizes: Record<ParticleType, ParticleSize> = {
  "particle-1": { width: 9, height: 15 },
  "particle-2": { width: 9, height: 12 },
  "particle-3": { width: 9, height: 9 },
  "particle-4": { width: 6, height: 9 },
  "particle-5": { width: 12, height: 12 },
  "particle-6": { width: 9, height: 6 },
};
