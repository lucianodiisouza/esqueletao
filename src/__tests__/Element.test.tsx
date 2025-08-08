import React from 'react';
import { render } from '@testing-library/react-native';
import { SkeletonProvider } from '../context/SkeletonContext';
import Skeleton from '../components/Skeleton';

describe('Skeleton Component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(
      <SkeletonProvider>
        <Skeleton testID="skeleton-element" />
      </SkeletonProvider>
    );

    expect(getByTestId('skeleton-element')).toBeTruthy();
  });

  it('renders with custom width and height', () => {
    const { getByTestId } = render(
      <SkeletonProvider>
        <Skeleton 
          testID="skeleton-element" 
          width={100} 
          height={50} 
        />
      </SkeletonProvider>
    );

    const element = getByTestId('skeleton-element');
    expect(element).toBeTruthy();
  });

  it('renders with custom colors', () => {
    const { getByTestId } = render(
      <SkeletonProvider>
        <Skeleton 
          testID="skeleton-element" 
          baseColor="#ff0000" 
          highlightColor="#00ff00" 
        />
      </SkeletonProvider>
    );

    const element = getByTestId('skeleton-element');
    expect(element).toBeTruthy();
  });
});
