// Performance optimization configuration
export const performanceConfig = {
  // Image loading priorities
  imagePriorities: {
    hero: "high",
    aboveFold: "high",
    belowFold: "low",
    lazy: "low",
  },

  // Lazy loading intersection observer options
  lazyLoadOptions: {
    rootMargin: "50px 0px",
    threshold: 0.01,
  },

  // Preload strategies
  preloadStrategies: {
    criticalImages: ["/Cover-image-png.png"],
    fonts: ["/src/fonts/GeneralSans-Variable.ttf"],
    scripts: [],
  },

  // Bundle splitting thresholds
  bundling: {
    maxChunkSize: 500 * 1024, // 500KB
    minChunkSize: 20 * 1024, // 20KB
    vendorChunkSizeLimit: 1000 * 1024, // 1MB
  },
};

export default performanceConfig;
