import 'react-native-reanimated/lib/reanimated2/jestUtils';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native');
  return View;
});
