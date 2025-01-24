import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { quizCategories } from '../data/quizData';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Interesting QUIZ</Text>
        <Text style={styles.subtitle}>Awaits You</Text>
        <Text style={styles.description}>Play quizzes about healthcare and win prizes</Text>
      </View>

      <View style={styles.categoriesContainer}>
        {Object.entries(quizCategories).map(([key, category]) => (
          <TouchableOpacity
            key={key}
            style={styles.categoryCard}
            onPress={() => navigation.navigate('Category', { category, categoryKey: key })}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
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
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  categoriesContainer: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '48%',
    marginBottom: 16,
    alignItems: 'center',
  },
  categoryIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
