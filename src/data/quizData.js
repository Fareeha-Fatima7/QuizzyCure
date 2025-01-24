export const quizCategories = {
  nutrition: {
    name: "Nutrition",
    icon: "🍎",
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            question: "Which of these is considered a superfood?",
            options: ["Blueberries", "White Bread", "Soda", "Candy"],
            correctAnswer: "Blueberries"
          },
          {
            id: 2,
            question: "What is the main function of protein in our body?",
            options: ["Energy source", "Building blocks for tissues", "Temperature regulation", "Blood sugar control"],
            correctAnswer: "Building blocks for tissues"
          },
          {
            id: 3,
            question: "How much water should an average adult drink daily?",
            options: ["1-2 liters", "8-10 liters", "500ml", "100ml"],
            correctAnswer: "1-2 liters"
          },
          {
            id: 4,
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
            correctAnswer: "Vitamin D"
          }
        ]
      }
    ]
  },
  mentalHealth: {
    name: "Mental Health",
    icon: "🧠",
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            question: "What is a good practice for stress management?",
            options: ["Deep breathing", "Avoiding sleep", "Isolation", "Overworking"],
            correctAnswer: "Deep breathing"
          },
          {
            id: 2,
            question: "How many hours of sleep are recommended for adults?",
            options: ["4-5 hours", "7-9 hours", "12-14 hours", "2-3 hours"],
            correctAnswer: "7-9 hours"
          },
          {
            id: 3,
            question: "Which is a symptom of anxiety?",
            options: ["Rapid heartbeat", "Improved focus", "Better sleep", "Increased energy"],
            correctAnswer: "Rapid heartbeat"
          },
          {
            id: 4,
            question: "What is mindfulness?",
            options: ["Future planning", "Past reflection", "Present moment awareness", "Sleeping technique"],
            correctAnswer: "Present moment awareness"
          }
        ]
      }
    ]
  },
  hygiene: {
    name: "Hygiene",
    icon: "🧼",
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            question: "How long should you wash your hands?",
            options: ["5 seconds", "20 seconds", "1 minute", "5 minutes"],
            correctAnswer: "20 seconds"
          },
          {
            id: 2,
            question: "How often should you brush your teeth?",
            options: ["Once a week", "Once a day", "Twice a day", "Once a month"],
            correctAnswer: "Twice a day"
          },
          {
            id: 3,
            question: "What is the best way to prevent the spread of germs?",
            options: ["Regular handwashing", "Sharing utensils", "Touching face frequently", "Skipping showers"],
            correctAnswer: "Regular handwashing"
          },
          {
            id: 4,
            question: "How often should you change your toothbrush?",
            options: ["Every 3-4 months", "Once a year", "Never", "Every 2 years"],
            correctAnswer: "Every 3-4 months"
          }
        ]
      }
    ]
  },
  exercise: {
    name: "Exercise",
    icon: "🏃",
    levels: [
      {
        id: 1,
        questions: [
          {
            id: 1,
            question: "How many minutes of moderate exercise is recommended daily?",
            options: ["10 minutes", "30 minutes", "2 hours", "5 hours"],
            correctAnswer: "30 minutes"
          },
          {
            id: 2,
            question: "Which is a good warm-up exercise?",
            options: ["Light stretching", "Heavy weightlifting", "Sprinting", "Maximum pushups"],
            correctAnswer: "Light stretching"
          },
          {
            id: 3,
            question: "What type of exercise builds muscle strength?",
            options: ["Resistance training", "Sleeping", "Watching TV", "Sitting"],
            correctAnswer: "Resistance training"
          },
          {
            id: 4,
            question: "Which is a cardiovascular exercise?",
            options: ["Running", "Standing", "Sleeping", "Sitting"],
            correctAnswer: "Running"
          }
        ]
      }
    ]
  }
};
