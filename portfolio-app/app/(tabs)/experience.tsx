import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Card from '@/components/Card';
import LoadingScreen from '@/components/LoadingScreen';
import SectionTitle from '@/components/SectionTitle';
import { useColorScheme } from '@/hooks/useColorScheme';
import Colors from '@/constants/Colors';
import { getExperience, Experience } from '@/services/back4app';

export default function ExperienceScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  const [experience, setExperience] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadExperience();
  }, []);

  const loadExperience = async () => {
    try {
      const data = await getExperience();
      setExperience(data);
    } catch (error) {
      console.error('Error loading experience:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Animatable.View animation="fadeIn" duration={1000}>
          <View style={styles.header}>
            <ThemedText style={styles.headerTitle}>💼 Experiência Profissional</ThemedText>
            <ThemedText style={styles.headerSubtitle}>
              Minha trajetória e conquistas profissionais
            </ThemedText>
          </View>

          <SectionTitle title="Experiências" icon="🚀" />

          {experience.length === 0 ? (
            <Card style={styles.emptyCard}>
              <ThemedText style={styles.emptyText}>
                Nenhuma experiência profissional cadastrada ainda.
              </ThemedText>
            </Card>
          ) : (
            <View style={styles.timeline}>
              {experience.map((exp, index) => (
                <Animatable.View
                  key={exp.objectId || index}
                  animation="fadeInUp"
                  delay={index * 150}
                  duration={600}
                >
                  <View style={styles.timelineItem}>
                    <View style={[styles.timelineDot, { backgroundColor: exp.current ? colors.success : colors.primary }]} />
                    {index < experience.length - 1 && (
                      <View style={[styles.timelineLine, { backgroundColor: colors.border }]} />
                    )}
                    
                    <Card style={styles.experienceCard}>
                      {exp.current && (
                        <View style={[styles.currentBadge, { backgroundColor: colors.success }]}>
                          <ThemedText style={styles.currentBadgeText}>Atual</ThemedText>
                        </View>
                      )}

                      <View style={styles.periodBadge}>
                        <ThemedText style={[styles.periodText, { color: colors.primary }]}>
                          {formatDate(exp.startDate)} - {exp.current ? 'Presente' : formatDate(exp.endDate)}
                        </ThemedText>
                      </View>

                      <ThemedText style={styles.position}>{exp.position}</ThemedText>
                      <ThemedText style={[styles.company, { color: colors.primary }]}>
                        🏢 {exp.company}
                      </ThemedText>

                      <ThemedText style={styles.description}>{exp.description}</ThemedText>

                      {exp.technologies && exp.technologies.length > 0 && (
                        <View style={styles.techContainer}>
                          <ThemedText style={styles.techLabel}>Tecnologias:</ThemedText>
                          <View style={styles.techTags}>
                            {exp.technologies.map((tech, idx) => (
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
                    </Card>
                  </View>
                </Animatable.View>
              ))}
            </View>
          )}

          <SectionTitle title="Habilidades" icon="⚡" />

          <Card style={styles.skillsCard}>
            <View style={styles.skillCategory}>
              <ThemedText style={styles.skillCategoryTitle}>💻 Desenvolvimento</ThemedText>
              <View style={styles.skillTags}>
                <SkillTag text="React Native" color={colors.primary} />
                <SkillTag text="TypeScript" color={colors.primary} />
                <SkillTag text="JavaScript" color={colors.primary} />
                <SkillTag text="Node.js" color={colors.primary} />
              </View>
            </View>

            <View style={styles.skillCategory}>
              <ThemedText style={styles.skillCategoryTitle}>🎨 Frontend</ThemedText>
              <View style={styles.skillTags}>
                <SkillTag text="React" color={colors.secondary} />
                <SkillTag text="CSS" color={colors.secondary} />
                <SkillTag text="Responsive Design" color={colors.secondary} />
              </View>
            </View>

            <View style={styles.skillCategory}>
              <ThemedText style={styles.skillCategoryTitle}>🔧 Ferramentas</ThemedText>
              <View style={styles.skillTags}>
                <SkillTag text="Git" color={colors.accent} />
                <SkillTag text="VS Code" color={colors.accent} />
                <SkillTag text="Figma" color={colors.accent} />
              </View>
            </View>
          </Card>
        </Animatable.View>
      </ScrollView>
    </ThemedView>
  );
}

function SkillTag({ text, color }: { text: string; color: string }) {
  return (
    <View style={[styles.skillTag, { borderColor: color }]}>
      <ThemedText style={[styles.skillTagText, { color }]}>{text}</ThemedText>
    </View>
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
  timeline: {
    paddingHorizontal: 16,
    paddingLeft: 32,
  },
  timelineItem: {
    position: 'relative',
    marginBottom: 16,
  },
  timelineDot: {
    position: 'absolute',
    left: -24,
    top: 24,
    width: 16,
    height: 16,
    borderRadius: 8,
    zIndex: 2,
  },
  timelineLine: {
    position: 'absolute',
    left: -17,
    top: 40,
    width: 2,
    height: '100%',
    zIndex: 1,
  },
  experienceCard: {
    marginLeft: 8,
  },
  currentBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    zIndex: 1,
  },
  currentBadgeText: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  periodBadge: {
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  periodText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  position: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  company: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    lineHeight: 22,
    opacity: 0.8,
    marginBottom: 12,
  },
  techContainer: {
    marginTop: 8,
  },
  techLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    opacity: 0.7,
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
  skillsCard: {
    marginHorizontal: 16,
    marginBottom: 32,
  },
  skillCategory: {
    marginBottom: 20,
  },
  skillCategoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1.5,
  },
  skillTagText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
