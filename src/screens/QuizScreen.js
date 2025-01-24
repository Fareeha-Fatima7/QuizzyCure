import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function QuizScreen({ route, navigation }) {
  const { level, category } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const currentQuestion = level.questions[currentQuestionIndex];

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 20);
    }

    setTimeout(() => {
      if (currentQuestionIndex < level.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
      } else {
        navigation.replace('Result', { score, totalQuestions: level.questions.length });
      }
    }, 1000);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.progressContainer}>
        <View 
          style={[
            styles.progressBar, 
            { width: `${((currentQuestionIndex + 1) / level.questions.length) * 100}%` }
          ]} 
        />
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>Question {currentQuestionIndex + 1}</Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedAnswer === option && 
                (option === currentQuestion.correctAnswer ? styles.correctAnswer : styles.wrongAnswer)
            ]}
            onPress={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            <Text style={styles.optionText}>{option}</Text>
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
  progressContainer: {
    height: 4,
    backgroundColor: '#fff',
    width: '100%',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#F97316',
  },
  questionContainer: {
    padding: 20,
  },
  questionNumber: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  optionsContainer: {
    padding: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  correctAnswer: {
    backgroundColor: '#22C55E',
  },
  wrongAnswer: {
    backgroundColor: '#EF4444',
  },
});
