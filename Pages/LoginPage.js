import React from 'react';
import { StatusBar, Image, TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, ScrollView, Keyboard } from 'react-native';

function LoginPage({ navigation }) {
// State to manage the keyboard offset
const [keyboardOffset, setKeyboardOffset] = React.useState(0);

// useEffect to handle keyboard show/hide events
React.useEffect(() => {
  // Add listener for when the keyboard appears
  const keyboardDidShowListener = Keyboard.addListener(
    'keyboardDidShow',
    (event) => {
      // When the keyboard appears, adjust the offset by adding the keyboard's height plus 20 units
      setKeyboardOffset(event.endCoordinates.height + 20); // Adjust as needed
    }
  );

  // Add listener for when the keyboard hides
  const keyboardDidHideListener = Keyboard.addListener(
    'keyboardDidHide',
    () => {
      // When the keyboard hides, reset the offset to 0
      setKeyboardOffset(0);
    }
  );

  // Cleanup function to remove the listeners when the component unmounts
  return () => {
    keyboardDidShowListener.remove();
    keyboardDidHideListener.remove();
  };
}, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount



  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={keyboardOffset}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.logoContainer}>
          <Text style={styles.companyName}>ICICI Bank</Text>
          <Image
            style={styles.logo}
            source={require('../assets/bankLogo.png')}
          />
        </View>

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

        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionText}>Update Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.captchaContainer}>
          <Image
            style={styles.captchaLogo}
            source={require('../assets/capcha.jpeg')}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Captcha"
          />
        </View>

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
    paddingHorizontal: 30,
    paddingTop: 150,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 180,
    height: 60,
    resizeMode: 'contain',
  },
  companyName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color:'red', // ICICI Bank color
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: '#0046be',
  },
  captchaContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  captchaLogo: {
    width: 180,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  messageContainer: {
    alignItems: 'center',
  },
  messageText: {
    marginBottom: 15,
    color: '#555',
  },
  nextButton: {
    backgroundColor: '#0046be',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  label: {
    marginBottom: 8,
    color: '#333',
  },
};

export default LoginPage;
