import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View, KeyboardAvoidingView, Platform, Image } from 'react-native';

function OtpPage() {
  const otpInputs = Array(6).fill(null).map(() => useRef(null));

  const focusNextInput = (index) => {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.companyName}>ICICI Bank</Text>
          <Image
            style={styles.logo}
            source={require('../assets/bankLogo.png')}
          />
        </View>
        <Text style={styles.label}>Enter your OTP below</Text>

        <View style={styles.inputContainer}>
          <View style={styles.otpContainer}>
            {otpInputs.map((ref, index) => (
              <TextInput
                ref={ref}
                key={index}
                style={styles.otpInput}
                placeholder="_"
                maxLength={1}
                keyboardType="numeric"
                onChangeText={(text) => {
                  if (text.length === 1) {
                    focusNextInput(index);
                  }
                }}
              />
            ))}
          </View>
        </View>

        {/* Resend OTP Options */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity>
            <Text style={styles.optionText}>Resend OTP to Mobile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.optionText}>Resend OTP to Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    //justifyContent: 'center',
    },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 25,
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderRadius: 5,
    fontSize: 18,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: '#0D3880', // ICICI Bank color
    textDecorationLine: 'underline',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    marginTop:100,
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
    color:'#0D3880', // ICICI Bank color
  },
};

export default OtpPage;
