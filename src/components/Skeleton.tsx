import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { ElementProps } from '../types';
import { useSkeletonContext } from '../context/SkeletonContext';
import { interpolateOpacity, interpolateShimmer, getShimmerColors } from '../utils/animation';

const Skeleton: React.FC<ElementProps> = memo(({
  width = '100%',
  height = 20,
  borderRadius = 4,
  baseColor,
  highlightColor,
  animation = 'shimmer',
  duration = 1500,
  style,
  margin,
  padding,
}) => {
  const { theme } = useSkeletonContext();
  
  const progress = useSharedValue(0);
  
  const finalBaseColor = baseColor || theme.baseColor;
  const finalHighlightColor = highlightColor || theme.highlightColor;
  const finalAnimation = animation || theme.animation;
  const finalDuration = duration || theme.duration;

  React.useEffect(() => {
    if (finalAnimation === 'none') {
      cancelAnimation(progress);
      return;
    }

    if (finalAnimation === 'pulse') {
      progress.value = withRepeat(
        withTiming(1, { duration: finalDuration }),
        -1,
        true
      );
    } else if (finalAnimation === 'shimmer') {
      progress.value = withRepeat(
        withTiming(1, { duration: finalDuration }),
        -1,
        false
      );
    }

    return () => {
      cancelAnimation(progress);
    };
  }, [finalAnimation, finalDuration]);

  const animatedStyle = useAnimatedStyle(() => {
    if (finalAnimation === 'pulse') {
      return {
        opacity: interpolateOpacity(progress, [0, 0.5, 1]),
      };
    }
    return {};
  });

  const shimmerStyle = useAnimatedStyle(() => {
    if (finalAnimation === 'shimmer') {
      return {
        transform: [{ translateX: interpolateShimmer(progress) * 100 }],
      };
    }
    return {};
  });

  const containerStyle: ViewStyle = {
    width: width as any,
    height: height as any,
    borderRadius,
    overflow: 'hidden',
    margin: margin as any,
    padding: padding as any,
    ...style,
  };

  if (finalAnimation === 'shimmer') {
    return (
      <View style={containerStyle}>
        <Animated.View style={[{ flex: 1 }, shimmerStyle]}>
          <LinearGradient
            colors={getShimmerColors(finalBaseColor, finalHighlightColor)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, width: '300%' }}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <Animated.View
      style={[
        containerStyle,
        { backgroundColor: finalBaseColor },
        animatedStyle,
      ]}
    />
  );
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
