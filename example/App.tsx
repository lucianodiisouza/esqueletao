import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  SkeletonProvider,
  Skeleton,
  useSkeletonContext,
  createSkeletonLayout,
} from 'esqueletao';

const CardSkeleton = () => (
  <View style={[styles.card, { width: '100%', height: 200, borderRadius: 12 }]}>
    <Skeleton width="100%" height={120} borderRadius={8} marginBottom={12} />
    <Skeleton width="80%" height={16} marginBottom={8} />
    <Skeleton width="60%" height={16} marginBottom={8} />
    <Skeleton width="40%" height={16} />
  </View>
);

const ListSkeleton = () => {
  const skeletonItems = createSkeletonLayout.list(10);

  return (
    <View style={styles.listContainer}>
      {skeletonItems.map((item, index) => (
        <Skeleton key={`skeleton-${index}`} {...item} />
      ))}
    </View>
  );
};

const AnimationDemo = () => {
  const [animation, setAnimation] = useState<'pulse' | 'shimmer' | 'none'>('shimmer');
  
  const animations: Array<'pulse' | 'shimmer' | 'none'> = ['pulse', 'shimmer', 'none'];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Animation Types</Text>
      <View style={styles.buttonContainer}>
        {animations.map((anim) => (
          <TouchableOpacity
            key={anim}
            style={[styles.button, animation === anim && styles.activeButton]}
            onPress={() => setAnimation(anim)}
          >
            <Text style={[styles.buttonText, animation === anim && styles.activeButtonText]}>
              {anim.charAt(0).toUpperCase() + anim.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Skeleton
        width="100%"
        height={40}
        borderRadius={8}
        animation={animation}
        duration={1500}
        style={styles.demoElement}
      />
    </View>
  );
};

const ThemeDemo = () => {
  const { theme, updateTheme } = useSkeletonContext();
  const [themeIndex, setThemeIndex] = useState(0);

  const themes = [
    { baseColor: '#E1E9EE', highlightColor: '#F2F8FC' },
    { baseColor: '#2a2a2a', highlightColor: '#3a3a3a' },
    { baseColor: '#ffebee', highlightColor: '#ffcdd2' },
    { baseColor: '#e8f5e8', highlightColor: '#c8e6c9' },
  ];

  const changeTheme = () => {
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
    updateTheme(themes[nextIndex]);
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Theme Demo</Text>
      <TouchableOpacity style={styles.button} onPress={changeTheme}>
        <Text style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>
      <View style={styles.themeContainer}>
        <Skeleton width="100%" height={20} marginBottom={8} />
        <Skeleton width="80%" height={16} marginBottom={8} />
        <Skeleton width="60%" height={16} />
      </View>
    </View>
  );
};

const CustomShapes = () => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Custom Shapes</Text>
    <View style={styles.shapesContainer}>
      <Skeleton width={80} height={80} borderRadius={40} style={styles.circle} />
      <Skeleton width={100} height={60} borderRadius={8} style={styles.rectangle} />
      <Skeleton width={60} height={100} borderRadius={4} style={styles.tallRectangle} />
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <SkeletonProvider
        theme={{
          baseColor: '#E1E9EE',
          highlightColor: '#F2F8FC',
          animation: 'shimmer',
          duration: 1500,
        }}
      >
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                     <View style={styles.header}>
             <Text style={styles.title}>Esqueletao</Text>
             <Text style={styles.subtitle}>Skeleton Loading Components</Text>
           </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Card Skeleton</Text>
            <CardSkeleton />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>List Skeleton</Text>
            <ListSkeleton />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>List Library Examples</Text>
            <Text style={styles.description}>
              The library works with any list implementation. Here are examples:
            </Text>
            <View style={styles.codeExample}>
              <Text style={styles.codeTitle}>With FlashList:</Text>
              <Text style={styles.codeText}>
                {`import { Skeleton } from 'esqueletao';
import { FlashList } from '@shopify/flash-list';

const SkeletonList = () => (
  <FlashList
    data={createSkeletonLayout.list(10)}
    renderItem={({ item }) => <Skeleton {...item} />}
    estimatedItemSize={60}
  />
);`}
              </Text>
            </View>
            <View style={styles.codeExample}>
              <Text style={styles.codeTitle}>With FlatList:</Text>
              <Text style={styles.codeText}>
                {`import { Skeleton } from 'esqueletao';
import { FlatList } from 'react-native';

const SkeletonList = () => (
  <FlatList
    data={createSkeletonLayout.list(10)}
    renderItem={({ item }) => <Skeleton {...item} />}
    keyExtractor={(item, index) => \`skeleton-\${index}\`}
  />
);`}
              </Text>
            </View>
          </View>

          <AnimationDemo />
          <ThemeDemo />
          <CustomShapes />
        </ScrollView>
      </SkeletonProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    flex: 1,
  },
  activeButton: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '500',
  },
  activeButtonText: {
    fontWeight: '600',
  },
  demoElement: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
  themeContainer: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  shapesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
  },
  circle: {
    backgroundColor: 'white',
  },
  rectangle: {
    backgroundColor: 'white',
  },
  tallRectangle: {
    backgroundColor: 'white',
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 16,
    lineHeight: 20,
  },
  codeExample: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  codeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  codeText: {
    fontSize: 12,
    color: '#34495e',
    fontFamily: 'monospace',
    lineHeight: 16,
  },
});
