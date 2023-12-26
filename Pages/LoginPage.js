import React from 'react';
import { StatusBar, Image, TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

function LoginPage({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={150} // Adjust this value as needed
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Company Logo and Name */}
        <View style={styles.logoContainer}>
          <Text style={styles.companyName}>ICICI Bank</Text>
          <Image
            style={styles.logo}
            source={require('../assets/bankLogo.png')} // Replace with your logo path
          />
        </View>

        {/* ID and Password Input Fields */}
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Bank ID</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Bank ID"
            />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Password"
              secureTextEntry={true}
            />
          </View>
        </View>

        {/* Forgot Password and Update Password Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        {/* Captcha Image and Input Field */}
        <View style={styles.captchaContainer}>
          {/* Add your captcha image component here */}
          <Image
            style={styles.captchaLogo}
            source={require('../assets/capcha.jpeg')} // Replace with your logo path
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Captcha"
          />
        </View>

        {/* Message and Next Button */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Press "Next" to receive OTP on your mobile</Text>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate('OtpPage')}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 50,
    paddingTop: 50,
    justifyContent: 'center', // You can adjust this based on your layout
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: 'blue',
  },
  captchaContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  captchaLogo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
  messageContainer: {
    alignItems: 'center',
  },
  messageText: {
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  label: {
    marginBottom: 5,
    color: 'black',
  },
};

export default LoginPage;
