// Core component
export { default as Skeleton } from "./components/Skeleton";

// Context and hooks
export {
  SkeletonProvider,
  useSkeletonContext,
} from "./context/SkeletonContext";

// Types
export type {
  AnimationType,
  SkeletonBaseProps,
  SkeletonProps as SkeletonProps,
  SkeletonTheme,
  SkeletonContextType,
} from "./types";

// Utilities
export {
  createPulseAnimation,
  createShimmerAnimation,
  interpolateOpacity,
  interpolateShimmer,
  getShimmerColors,
  getShimmerLocations,
} from "./utils/animation";

// List helpers
export {
  createSkeletonData,
  skeletonTemplates,
  createSkeletonLayout,
} from "./utils/listHelpers";

// Default export
export { default } from "./components/Skeleton";
