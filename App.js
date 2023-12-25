// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './Pages/LoginPage';
import OtpPage from './Pages/OtpPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name=" " component={LoginPage} />
        <Stack.Screen name="NextPage" component={OtpPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
