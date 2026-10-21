import React from 'react';
import { StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';

interface SectionTitleProps {
  title: string;
  icon?: string;
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.line, { backgroundColor: colors.primary }]} />
      <ThemedText style={[styles.title, { color: colors.primary }]}>
        {icon && `${icon} `}{title}
      </ThemedText>
      <ThemedView style={[styles.line, { backgroundColor: colors.primary }]} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  line: {
    flex: 1,
    height: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});
