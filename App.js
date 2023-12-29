import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

import LoginPage from './Pages/LoginPage';
import OtpPage from './Pages/OtpPage';

const Stack = createStackNavigator();

export default function App() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const renderOptionsButton = () => (
    <TouchableOpacity onPress={toggleOptions}>
      <Text style={styles.menuOptions}>...</Text>
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            headerShown: true,
            headerTitle: '', // Remove title for LoginPage
            headerRight: renderOptionsButton, // Add options button
          }}
        />
        <Stack.Screen
          name="OtpPage"
          component={OtpPage}
          options={{
            headerShown: true,
            headerTitle: '', // Remove title for OtpPage
            headerRight: renderOptionsButton, // Add options button
          }}
        />
      </Stack.Navigator>

      
      {showOptions && (
        <View style={styles.menuBox}>
          <TouchableOpacity style={styles.option} onPress={toggleOptions}>
            <Text style={styles.menuText}>HELP ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={toggleOptions}>
            <Text style={styles.menuText}>FAQ !</Text>
          </TouchableOpacity>
        </View>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  menuOptions: {
    transform: [{ rotate: '90deg' }], // Rotate text vertically
    fontSize: 30,
    paddingRight: 10,
    fontWeight: '500',
  },
  menuBox: {
    position: 'absolute',
    top: 90,
    right: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  option: {
    padding: 10,
    marginVertical: 5,
    width: 100,
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
  },
});
