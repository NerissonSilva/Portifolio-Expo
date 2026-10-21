import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Linking } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/Card';
import LoadingScreen from '@/components/LoadingScreen';
import SectionTitle from '@/components/SectionTitle';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import { getProjects, Project } from '@/services/back4app';

export default function ProjectsScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error loading projects:', error);
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
        <Animatable.View animation="fadeIn" duration={1000}>
          <View style={styles.header}>
            <ThemedText style={styles.headerTitle}>🚀 Projetos</ThemedText>
            <ThemedText style={styles.headerSubtitle}>
              Meus principais projetos e realizações
            </ThemedText>
          </View>

          {projects.filter(p => p.featured).length > 0 && (
            <>
              <SectionTitle title="Projetos em Destaque" icon="⭐" />
              {projects
                .filter(p => p.featured)
                .map((project, index) => (
                  <ProjectCard
                    key={project.objectId || index}
                    project={project}
                    index={index}
                    colors={colors}
                    onOpenLink={openLink}
                  />
                ))}
            </>
          )}

          <SectionTitle title="Todos os Projetos" icon="📁" />

          {projects.length === 0 ? (
            <Card style={styles.emptyCard}>
              <ThemedText style={styles.emptyText}>
                Nenhum projeto cadastrado ainda.
              </ThemedText>
            </Card>
          ) : (
            projects.map((project, index) => (
              <ProjectCard
                key={project.objectId || index}
                project={project}
                index={index}
                colors={colors}
                onOpenLink={openLink}
              />
            ))
          )}

          <Card style={[styles.githubCard, { backgroundColor: colors.primary }]}>
            <ThemedText style={styles.githubTitle}>💻 Mais Projetos</ThemedText>
            <ThemedText style={styles.githubText}>
              Confira mais projetos no meu GitHub
            </ThemedText>
          </Card>
        </Animatable.View>
      </ScrollView>
    </ThemedView>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  colors: any;
  onOpenLink: (url?: string) => void;
}

function ProjectCard({ project, index, colors, onOpenLink }: ProjectCardProps) {
  return (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 150}
      duration={600}
    >
      <Card style={styles.projectCard}>
        {project.featured && (
          <View style={[styles.featuredBadge, { backgroundColor: colors.warning }]}>
            <ThemedText style={styles.featuredBadgeText}>⭐ Destaque</ThemedText>
          </View>
        )}

        {project.imageUrl && (
          <View style={[styles.projectImage, { backgroundColor: colors.border }]}>
            <ThemedText style={styles.projectImagePlaceholder}>🖼️</ThemedText>
          </View>
        )}

        <ThemedText style={styles.projectName}>{project.name}</ThemedText>
        <ThemedText style={styles.projectDescription}>{project.description}</ThemedText>

        {project.technologies && project.technologies.length > 0 && (
          <View style={styles.techContainer}>
            <View style={styles.techTags}>
              {project.technologies.map((tech, idx) => (
                <View
                  key={idx}
                  style={[styles.techTag, { backgroundColor: colors.accent }]}
                >
                  <ThemedText style={styles.techTagText}>{tech}</ThemedText>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.linkContainer}>
          {project.githubUrl && (
            <TouchableOpacity
              style={[styles.linkButton, { backgroundColor: colors.primary }]}
              onPress={() => onOpenLink(project.githubUrl)}
            >
              <ThemedText style={styles.linkButtonText}>GitHub</ThemedText>
            </TouchableOpacity>
          )}
          {project.liveUrl && (
            <TouchableOpacity
              style={[styles.linkButton, { backgroundColor: colors.success }]}
              onPress={() => onOpenLink(project.liveUrl)}
            >
              <ThemedText style={styles.linkButtonText}>Ver Projeto</ThemedText>
            </TouchableOpacity>
          )}
        </View>
      </Card>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  projectCard: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  featuredBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  featuredBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
  },
  projectImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  projectImagePlaceholder: {
    fontSize: 48,
  },
  projectName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
    marginBottom: 12,
  },
  techContainer: {
    marginBottom: 16,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  techTag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  techTagText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#fff',
  },
  linkContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  linkButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  linkButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  emptyCard: {
    marginHorizontal: 16,
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 14,
    opacity: 0.7,
    textAlign: 'center',
  },
  githubCard: {
    marginHorizontal: 16,
    marginBottom: 32,
    alignItems: 'center',
  },
  githubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  githubText: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
});
