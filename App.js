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
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
        <Stack.Screen name="OtpPage" component={OtpPage}  options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
