import { ElementProps } from '../types';

/**
 * Creates skeleton data for list rendering
 * @param count Number of skeleton items to generate
 * @param template Template for skeleton item properties
 * @returns Array of skeleton data
 */
export const createSkeletonData = (
  count: number,
  template: Partial<ElementProps> = {}
): ElementProps[] => {
  return Array.from({ length: count }, (_, index) => ({
    width: '100%',
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    animation: 'shimmer' as const,
    ...template,
  }));
};

/**
 * Creates skeleton data for different content types
 */
export const skeletonTemplates = {
  card: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
  },
  listItem: {
    width: '100%',
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  text: {
    width: '100%',
    height: 16,
    borderRadius: 4,
    marginBottom: 4,
  },
  button: {
    width: 120,
    height: 40,
    borderRadius: 8,
  },
} as const;

/**
 * Helper function to create skeleton data for common layouts
 */
export const createSkeletonLayout = {
  card: (count: number = 1) => createSkeletonData(count, skeletonTemplates.card),
  list: (count: number = 10) => createSkeletonData(count, skeletonTemplates.listItem),
  avatar: (count: number = 5) => createSkeletonData(count, skeletonTemplates.avatar),
  text: (count: number = 3) => createSkeletonData(count, skeletonTemplates.text),
  button: (count: number = 2) => createSkeletonData(count, skeletonTemplates.button),
};
