import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import OTPTextView from 'react-native-otp-textinput';
import verifyOTP from '../api/auth/verifyOTP';
import {useDispatch} from 'react-redux';
import {loginAction} from '../redux/slice/auth';
import messaging from '@react-native-firebase/messaging';
import sendOTP from '../api/auth/sendOTP';
import colors from '../constants/colors';
import RNOtpVerify from 'react-native-otp-verify';
import getOTP from '../util/getOTP';

const OTP = ({navigation, route}) => {
  const dispatch = useDispatch();

  const {mobile} = route.params;

  const otpInput = useRef(null);
  const clearText = async () => {
    otpInput.current.clear();
    const fcm = await messaging().getToken();
    const body = {mobile, fcm};
    await sendOTP(body);
    Toast.show('OTP Resent');
    setTime(60);
  };

  const setText = value => {
    otpInput.current.setValue(value);
  };

  const [otp, setOtp] = useState('');
  const [valid, setValid] = useState(null);
  const [time, setTime] = useState(60);

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(() =>
        RNOtpVerify.addListener(sms => {
          if (sms) {
            const value = getOTP(sms);
            if (value) {
              setText(value);
            }
          }
        }),
      )
      .catch(error => console.log(error));
    return () => {
      RNOtpVerify.removeListener();
    };
  }, []);

  useEffect(() => {
    if (!time) {
      return;
    }

    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  useEffect(() => {
    if (otp.length === 4) {
      validateOTP();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otp]);

  function handleChange(value) {
    setOtp(value);
  }

  async function validateOTP() {
    const body = {otp};
    const response = await verifyOTP(body);
    if (response?.error || !response) {
      return setValid(false);
    }
    setValid(true);
    Toast.show('OTP Confirmed');

    if (response.isNew || !response.user.name) {
      setTimeout(() => {
        navigation.push('CreateProfile');
      }, 1000);
    } else {
      const payload = {
        user: response.user,
      };
      setTimeout(() => {
        dispatch(loginAction(payload));
      }, 1000);
    }
  }

  function goback() {
    navigation.goBack();
  }

  function gotoTerms() {
    navigation.push('TermsAndConditions');
  }

  const currentBorderColor = valid
    ? colors.success
    : valid === false
    ? colors.error
    : colors.primary;

  return (
    <ImageBackground
      source={require('../assets/images/AppBackground.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <View style={styles.otpContainer}>
        <Text style={styles.text}>Waiting to automatically detect an SMS</Text>
        <Text style={styles.text}>sent to +91 {mobile || '9876543210'}</Text>
        <OTPTextView
          // ref={e => (otpInput = e)}
          ref={otpInput}
          textInputStyle={styles.input}
          handleTextChange={handleChange}
          containerStyle={styles.otpInputContainer}
          inputCount={4}
          keyboardType="numeric"
          tintColor={currentBorderColor}
          offTintColor={currentBorderColor}
        />
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn't Received?</Text>
          <TouchableOpacity disabled={time} onPress={clearText}>
            <Text style={styles.resendTouchableText(!time)}>
              Resend OTP {time !== 0 && `in ${time} sec`}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={goback}>
          <Text style={styles.changeNumber}>Wrong Number? Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={gotoTerms}>
        <Text style={styles.terms}>Terms and conditions</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  otpContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
    color: colors.light,
    textAlign: 'center',
  },
  otpInputContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  resendContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  resendText: {
    color: '#FFFFFF61',
    marginRight: 10,
  },
  resendTouchableText: enabled => ({
    color: enabled ? colors.light : '#FFFFFF61',
  }),
  input: {
    backgroundColor: colors.darkBackground,
    color: colors.light,
    borderRadius: 4,
    width: 50,
    height: 50,
    textAlign: 'center',
    marginHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderBottomWidth: 1,
  },
  changeNumber: {
    color: colors.primary,
  },
  terms: {
    fontSize: 12,
    color: colors.light,
    opacity: 0.4,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default OTP;
