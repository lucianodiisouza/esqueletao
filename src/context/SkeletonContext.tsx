import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SkeletonTheme, SkeletonContextType } from '../types';

const defaultTheme: SkeletonTheme = {
  baseColor: '#E1E9EE',
  highlightColor: '#F2F8FC',
  animation: 'shimmer',
  duration: 1500,
};

const SkeletonContext = createContext<SkeletonContextType | undefined>(undefined);

export const useSkeletonContext = () => {
  const context = useContext(SkeletonContext);
  if (!context) {
    throw new Error('useSkeletonContext must be used within a SkeletonProvider');
  }
  return context;
};

interface SkeletonProviderProps {
  children: ReactNode;
  theme?: Partial<SkeletonTheme>;
}

export const SkeletonProvider: React.FC<SkeletonProviderProps> = ({ 
  children, 
  theme: initialTheme = {} 
}) => {
  const [theme, setTheme] = useState<SkeletonTheme>({
    ...defaultTheme,
    ...initialTheme,
  });

  const updateTheme = (newTheme: Partial<SkeletonTheme>) => {
    setTheme(prev => ({ ...prev, ...newTheme }));
  };

  return (
    <SkeletonContext.Provider value={{ theme, updateTheme }}>
      {children}
    </SkeletonContext.Provider>
  );
};
