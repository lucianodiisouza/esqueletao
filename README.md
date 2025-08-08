# Esqueletao

A customizable skeleton loading library for React Native with support for the new architecture (Fabric, TurboModules) and Expo compatibility.

## Features

- 🚀 **New Architecture Ready**: Fully compatible with React Native 0.73+ and the new architecture
- 📱 **Expo Compatible**: Works out-of-the-box with Expo managed workflow
- 🎨 **Customizable**: Highly customizable components with theme support
- ⚡ **Performance**: Optimized for lists with FlatList support and memoization
- 🎭 **Animations**: Smooth shimmer and pulse animations using Reanimated
- 📦 **TypeScript**: Full TypeScript support with proper type definitions

## Installation

```bash
npm install esqueletao
# or
yarn add esqueletao
```

### New Architecture Support

This library is fully compatible with React Native's new architecture (Fabric + TurboModules):

- **React Native 0.73+**: Built with new architecture support
- **Reanimated 4**: Uses JSI for optimal performance with latest features
- **Expo 50+**: Full compatibility with managed workflow
- **No native code**: Pure JavaScript/TypeScript implementation

### Expo

The library is fully compatible with Expo and requires no additional setup for the managed workflow. Just install and use!

### React Native CLI

If you're using React Native CLI, make sure you have the following dependencies installed:

```bash
npm install react-native-reanimated expo-linear-gradient
```

### Development Setup

To run the example app locally:

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run the example app
npm run example
```

## Quick Start

```tsx
import React from "react";
import { View } from "react-native";
import { SkeletonProvider, Skeleton } from "esqueletao";

const App = () => {
  return (
    <SkeletonProvider>
      <View>
        <Skeleton width="100%" height={20} marginBottom={8} />
        <Skeleton width="80%" height={16} marginBottom={8} />
        <Skeleton width="60%" height={16} />
      </View>
    </SkeletonProvider>
  );
};
```

## Components

### SkeletonProvider

The context provider that manages global theme settings.

```tsx
import { SkeletonProvider } from "esqueletao";

<SkeletonProvider
  theme={{
    baseColor: "#E1E9EE",
    highlightColor: "#F2F8FC",
    animation: "shimmer",
    duration: 1500,
  }}
>
  {/* Your skeleton components */}
</SkeletonProvider>;
```

### Skeleton

The core skeleton placeholder component with full customization options.

```tsx
import { Skeleton } from "esqueletao";

<Skeleton
  width={100}
  height={20}
  borderRadius={4}
  baseColor="#E1E9EE"
  highlightColor="#F2F8FC"
  animation="pulse"
  duration={1000}
  margin={8}
  padding={4}
/>;
```

### List Integration

The library is designed to work with any list implementation. Here are examples with different list libraries:

#### With FlashList

```tsx
import { Skeleton, createSkeletonLayout } from "esqueletao";
import { FlashList } from "@shopify/flash-list";

const SkeletonList = () => (
  <FlashList
    data={createSkeletonLayout.list(10)}
    renderItem={({ item }) => <Skeleton {...item} />}
    estimatedItemSize={60}
  />
);
```

#### With FlatList

```tsx
import { Skeleton, createSkeletonLayout } from "esqueletao";
import { FlatList } from "react-native";

const SkeletonList = () => (
  <FlatList
    data={createSkeletonLayout.list(10)}
    renderItem={({ item }) => <Skeleton {...item} />}
    keyExtractor={(item, index) => `skeleton-${index}`}
  />
);
```

#### With VirtualizedList

```tsx
import { Skeleton, createSkeletonLayout } from "esqueletao";
import { VirtualizedList } from "react-native";

const SkeletonList = () => (
  <VirtualizedList
    data={createSkeletonLayout.list(10)}
    renderItem={({ item }) => <Skeleton {...item} />}
    getItemCount={(data) => data.length}
    getItem={(data, index) => data[index]}
  />
);
```

## Props

### Common Props

All skeleton components accept these props:

| Prop             | Type                             | Default     | Description                        |
| ---------------- | -------------------------------- | ----------- | ---------------------------------- |
| `width`          | `number \| string`               | `'100%'`    | Width of the skeleton element      |
| `height`         | `number \| string`               | `20`        | Height of the skeleton element     |
| `borderRadius`   | `number`                         | `4`         | Border radius for rounded corners  |
| `baseColor`      | `string`                         | `'#E1E9EE'` | Base color of the skeleton         |
| `highlightColor` | `string`                         | `'#F2F8FC'` | Highlight color for shimmer effect |
| `animation`      | `'pulse' \| 'shimmer' \| 'none'` | `'shimmer'` | Animation type                     |
| `duration`       | `number`                         | `1500`      | Animation duration in milliseconds |
| `style`          | `ViewStyle`                      | -           | Additional styles                  |

### Skeleton Props

Additional props for the Skeleton component:

| Prop      | Type               | Default | Description                |
| --------- | ------------------ | ------- | -------------------------- |
| `margin`  | `number \| string` | -       | Margin around the element  |
| `padding` | `number \| string` | -       | Padding inside the element |

## Animation Types

### Shimmer

A smooth gradient animation that moves across the element.

```tsx
<Skeleton animation="shimmer" duration={1500} />
```

### Pulse

A subtle opacity animation that fades in and out.

```tsx
<Skeleton animation="pulse" duration={1000} />
```

### None

No animation, just a static skeleton.

```tsx
<Skeleton animation="none" />
```

## Examples

### Card Skeleton

```tsx
import React from "react";
import { View } from "react-native";
import { SkeletonProvider, Skeleton } from "esqueletao";

const CardSkeleton = () => {
  return (
    <SkeletonProvider>
      <View
        style={
          {
            /* style the wrapper as you prefer */
          }
        }
      >
        <Skeleton
          width="100%"
          height={120}
          borderRadius={8}
          marginBottom={12}
        />
        <Skeleton width="80%" height={16} marginBottom={8} />
        <Skeleton width="60%" height={16} marginBottom={8} />
        <Skeleton width="40%" height={16} />
      </View>
    </SkeletonProvider>
  );
};
```

### List Skeleton

```tsx
import React from "react";
import { SkeletonProvider, Skeleton, createSkeletonLayout } from "esqueletao";
import { FlatList } from "react-native";

const ListSkeleton = () => {
  const skeletonItems = createSkeletonLayout.list(10);

  return (
    <SkeletonProvider>
      <FlatList
        data={skeletonItems}
        renderItem={({ item }) => <Skeleton {...item} />}
        keyExtractor={(item, index) => `skeleton-${index}`}
        showsVerticalScrollIndicator={false}
      />
    </SkeletonProvider>
  );
};
```

### Custom Theme

```tsx
import React from "react";
import { SkeletonProvider, Skeleton } from "esqueletao";

const CustomThemeExample = () => {
  return (
    <SkeletonProvider
      theme={{
        baseColor: "#2a2a2a",
        highlightColor: "#3a3a3a",
        animation: "pulse",
        duration: 2000,
      }}
    >
      <Skeleton width="100%" height={20} />
    </SkeletonProvider>
  );
};
```

## Utilities

The library exports utility functions for animation calculations, color interpolation, and list helpers.

### List Helpers

```tsx
import {
  createSkeletonData,
  skeletonTemplates,
  createSkeletonLayout,
} from "esqueletao";

// Create custom skeleton data
const customSkeletons = createSkeletonData(5, {
  width: "100%",
  height: 80,
  borderRadius: 12,
});

// Use predefined templates
const cardSkeletons = createSkeletonLayout.card(3);
const listSkeletons = createSkeletonLayout.list(10);
const avatarSkeletons = createSkeletonLayout.avatar(5);

// Available templates
skeletonTemplates.card; // Card layout
skeletonTemplates.listItem; // List item layout
skeletonTemplates.avatar; // Avatar/circle layout
skeletonTemplates.text; // Text line layout
skeletonTemplates.button; // Button layout
```

## Performance Tips

1. **Use memoization**: Components are already memoized, but you can further optimize by memoizing your skeleton data.

2. **List optimization**: Use your preferred list library (FlashList, FlatList, etc.) with the Skeleton component for optimal performance.

3. **Theme inheritance**: Use the `SkeletonProvider` to set global theme defaults instead of passing props to every element.

4. **Animation control**: Use `animation="none"` for static skeletons to improve performance.

## TypeScript

The library is fully typed with TypeScript. You can import types for custom implementations:

```tsx
import type { SkeletonProps, SkeletonTheme, AnimationType } from "esqueletao";
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
