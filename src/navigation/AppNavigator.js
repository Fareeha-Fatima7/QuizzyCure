import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import QuizScreen from '../screens/QuizScreen';
import ResultScreen from '../screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#8B5CF6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'QuizzyCure' }}
        />
        <Stack.Screen 
          name="Category" 
          component={CategoryScreen}
          options={({ route }) => ({ title: route.params?.category?.name || 'Category' })}
        />
        <Stack.Screen 
          name="Quiz" 
          component={QuizScreen}
          options={{ title: 'Quiz' }}
        />
        <Stack.Screen 
          name="Result" 
          component={ResultScreen}
          options={{ title: 'Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
