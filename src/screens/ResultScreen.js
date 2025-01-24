import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { score, totalQuestions } = route.params;
  const percentage = (score / (totalQuestions * 20)) * 100;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nice Work</Text>
      
      <View style={styles.scoreContainer}>
        <View style={styles.checkmark}>
          <Text style={styles.checkmarkText}>✓</Text>
        </View>
        <View style={styles.starsContainer}>
          {[1, 2, 3].map((star, index) => (
            <Text 
              key={star} 
              style={[
                styles.star,
                { color: index < Math.floor(percentage / 33.33) ? '#FFD700' : '#E5E7EB' }
              ]}
            >
              ★
            </Text>
          ))}
        </View>
        <Text style={styles.scoreText}>You Earned {score} pts</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Next Stage</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.secondaryButtonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 32,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 48,
  },
  checkmark: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F97316',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  checkmarkText: {
    fontSize: 40,
    color: '#fff',
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  star: {
    fontSize: 32,
    marginHorizontal: 4,
  },
  scoreText: {
    fontSize: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#F97316',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    marginBottom: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
  },
  secondaryButtonText: {
    color: '#fff',
  },
});
