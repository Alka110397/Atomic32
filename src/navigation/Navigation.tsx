import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { RegisterNameScreen } from '../screens/RegisterNameScreen';
import { RegisterNumberScreen } from '../screens/RegisterNumberScreen';
import { SuccessScreen } from '../screens/SuccessScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RegisterName" component={RegisterNameScreen} />
      <Stack.Screen name="RegisterNumber" component={RegisterNumberScreen} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
}