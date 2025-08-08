import { interpolate, SharedValue } from 'react-native-reanimated';

export const createPulseAnimation = (duration: number = 1000) => {
  return {
    duration,
    easing: (t: number) => t,
  };
};

export const createShimmerAnimation = (duration: number = 1500) => {
  return {
    duration,
    easing: (t: number) => t,
  };
};

export const interpolateOpacity = (progress: SharedValue<number>, inputRange: number[] = [0, 0.5, 1]) => {
  return interpolate(progress.value, inputRange, [0.3, 1, 0.3], 'clamp');
};

export const interpolateShimmer = (progress: SharedValue<number>) => {
  return interpolate(progress.value, [0, 1], [-1, 2], 'clamp');
};

export const getShimmerColors = (baseColor: string, highlightColor: string) => {
  return [baseColor, highlightColor, baseColor];
};

export const getShimmerLocations = (progress: number) => {
  const shimmerProgress = progress * 3 - 1;
  return [shimmerProgress - 0.3, shimmerProgress, shimmerProgress + 0.3];
};
