import { useColorScheme as useColorSchemeCore } from 'react-native';

export const useColorScheme = () => {
  const coreScheme = useColorSchemeCore();
  // The core hook returns 'light' | 'dark' | null | undefined
  // We normalize it to always return 'light' or 'dark'
  return coreScheme === 'dark' ? 'dark' : 'light';
};
