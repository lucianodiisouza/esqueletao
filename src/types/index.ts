import React from "react";
import { ViewStyle } from "react-native";

export type AnimationType = "pulse" | "shimmer" | "none";

export interface SkeletonBaseProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  baseColor?: string;
  highlightColor?: string;
  animation?: AnimationType;
  duration?: number;
  style?: ViewStyle;
  testID?: string;
}

export interface ElementProps extends SkeletonBaseProps {
  margin?: number | string;
  padding?: number | string;
}

export interface SkeletonTheme {
  baseColor: string;
  highlightColor: string;
  animation: AnimationType;
  duration: number;
}

export interface SkeletonContextType {
  theme: SkeletonTheme;
  updateTheme: (theme: Partial<SkeletonTheme>) => void;
}
