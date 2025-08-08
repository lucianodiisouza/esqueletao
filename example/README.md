# Esqueletao Example

This is an example Expo app demonstrating the features of the Esqueletao library.

## Features Demonstrated

- **Card Skeleton**: Shows how to create skeleton loading for card layouts
- **List Skeleton**: Demonstrates optimized FlatList skeleton loading
- **Animation Types**: Interactive demo of pulse, shimmer, and no animation
- **Theme Demo**: Shows how to change global theme settings
- **Custom Shapes**: Examples of different skeleton shapes and sizes

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Run on your device or simulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan the QR code with Expo Go app on your phone

## Project Structure

```
example/
├── App.tsx              # Main app component
├── package.json         # Dependencies
├── app.json            # Expo configuration
├── babel.config.js     # Babel configuration
└── tsconfig.json       # TypeScript configuration
```

## Dependencies

- `expo`: ~50.0.0
- `react-native-reanimated`: ~3.6.0
- `expo-linear-gradient`: ~12.7.1
- `esqueletao`: Local library (file:../)

## Development

The example app uses the local version of the library, so any changes to the library source code will be reflected in the example app after restarting the development server.
