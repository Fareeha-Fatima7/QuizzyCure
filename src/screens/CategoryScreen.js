import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function CategoryScreen({ route, navigation }) {
  const { category } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{category.name}</Text>
        <Text style={styles.subtitle}>Select a Level</Text>
      </View>

      <View style={styles.levelsContainer}>
        {category.levels.map((level) => (
          <TouchableOpacity
            key={level.id}
            style={styles.levelCard}
            onPress={() => navigation.navigate('Quiz', { level, category })}
          >
            <Text style={styles.levelIcon}>🎯</Text>
            <Text style={styles.levelTitle}>Level {level.id}</Text>
            <Text style={styles.levelSubtitle}>{level.questions.length} Questions</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5CF6',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 16,
  },
  levelsContainer: {
    padding: 20,
  },
  levelCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
  },
  levelIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  levelTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  levelSubtitle: {
    fontSize: 16,
    color: '#666',
  },
});
