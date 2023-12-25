import React, { useRef } from 'react';
import { TextInput, TouchableOpacity, Text, View } from 'react-native';

function OtpPage() {
  const otpInputs = Array(6).fill(null).map(() => useRef(null));

  const focusNextInput = (index) => {
    if (index < otpInputs.length - 1) {
      otpInputs[index + 1].current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your OTP below</Text>

      <View style={styles.inputContainer}>
        <View style={styles.otpContainer}>
          {otpInputs.map((ref, index) => (
            <TextInput
              ref={ref}
              key={index}
              style={styles.otpInput}
              placeholder="-"
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
          <Text style={styles.optionText}>Click here to Resend OTP to Mobile</Text>
        </TouchableOpacity>
        </View>
        <View>
        <TouchableOpacity>
          <Text style={styles.optionText}>Click here to Resend OTP to Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 200,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    color: 'black',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpInput: {
    width: 40,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    color: 'blue',
  },
};

export default OtpPage;
