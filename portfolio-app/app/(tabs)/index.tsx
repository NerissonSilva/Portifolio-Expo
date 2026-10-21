import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/Card';
import LoadingScreen from '@/components/LoadingScreen';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import { getProfile, Profile } from '@/services/back4app';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error('Error loading profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const openLink = (url?: string) => {
    if (url) {
      Linking.openURL(url);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View animation="fadeInDown" duration={1000} style={styles.header}>
          <View style={[styles.avatar, { borderColor: colors.primary }]}>
            <ThemedText style={styles.avatarText}>
              {profile?.name?.split(' ').map(n => n[0]).join('') || 'NA'}
            </ThemedText>
          </View>
          <ThemedText style={styles.name}>{profile?.name || 'Nome não disponível'}</ThemedText>
          <ThemedText style={[styles.title, { color: colors.primary }]}>
            {profile?.title || 'Título não disponível'}
          </ThemedText>
          <ThemedText style={styles.location}>📍 {profile?.location || 'Localização'}</ThemedText>
        </Animatable.View>

        <Animatable.View animation="fadeInUp" duration={1000} delay={300}>
          <Card style={styles.card}>
            <ThemedText style={styles.sectionTitle}>💬 Sobre Mim</ThemedText>
            <ThemedText style={styles.bio}>
              {profile?.bio || 'Bio não disponível'}
            </ThemedText>
          </Card>

          <Card style={styles.card}>
            <ThemedText style={styles.sectionTitle}>📞 Contato</ThemedText>
            <View style={styles.contactItem}>
              <ThemedText style={styles.contactLabel}>Email:</ThemedText>
              <ThemedText style={[styles.contactValue, { color: colors.primary }]}>
                {profile?.email || 'N/A'}
              </ThemedText>
            </View>
            <View style={styles.contactItem}>
              <ThemedText style={styles.contactLabel}>Telefone:</ThemedText>
              <ThemedText style={styles.contactValue}>{profile?.phone || 'N/A'}</ThemedText>
            </View>
          </Card>

          <Card style={styles.card}>
            <ThemedText style={styles.sectionTitle}>🔗 Links</ThemedText>
            <View style={styles.linksContainer}>
              {profile?.github && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: colors.primary }]}
                  onPress={() => openLink(profile.github)}
                >
                  <ThemedText style={styles.linkButtonText}>GitHub</ThemedText>
                </TouchableOpacity>
              )}
              {profile?.linkedin && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: colors.secondary }]}
                  onPress={() => openLink(profile.linkedin)}
                >
                  <ThemedText style={styles.linkButtonText}>LinkedIn</ThemedText>
                </TouchableOpacity>
              )}
              {profile?.portfolio && (
                <TouchableOpacity
                  style={[styles.linkButton, { backgroundColor: colors.accent }]}
                  onPress={() => openLink(profile.portfolio)}
                >
                  <ThemedText style={styles.linkButtonText}>Portfolio</ThemedText>
                </TouchableOpacity>
              )}
            </View>
          </Card>
        </Animatable.View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  location: {
    fontSize: 14,
    opacity: 0.7,
  },
  card: {
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
  },
  contactItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contactLabel: {
    fontWeight: '600',
    marginRight: 8,
    width: 80,
  },
  contactValue: {
    flex: 1,
  },
  linksContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  linkButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  linkButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
