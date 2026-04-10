import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  green: '#4CAF7D',
  greenDark: '#3A9166',
  white: '#FFFFFF',
  text: '#1A1A2E',
  textSec: '#7C8BA0',
  border: '#E8EDF2',
  bg: '#F7F9FC',
  inputBg: '#F4F6FA',
  greenLight: '#E8F5EE',
};

export default function VerifyScreen({ navigation }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 4) {
      navigation.navigate('Location');
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '']);
    setTimeLeft(60);
    setCanResend(false);
    inputRefs.current[0]?.focus();
  };

  const isOtpComplete = otp.every((digit) => digit !== '');

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verify Code</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Icon */}
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="lock-outline"
            size={64}
            color={COLORS.green}
          />
        </View>

        <Text style={styles.title}>Verify your phone</Text>
        <Text style={styles.subtitle}>
          We've sent a 4-digit code to your phone
        </Text>

        {/* OTP Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              style={[
                styles.otpBox,
                digit !== '' && styles.otpBoxFilled,
              ]}
              maxLength={1}
              keyboardType="number-pad"
              value={digit}
              onChangeText={(value) => handleOtpChange(value, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              placeholder="-"
              placeholderTextColor={COLORS.textSec}
            />
          ))}
        </View>

        {/* Resend Section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>
            Didn't receive code?{' '}
            <Text
              style={[
                styles.resendLink,
                { color: canResend ? COLORS.green : COLORS.textSec },
              ]}
              onPress={canResend ? handleResend : undefined}
            >
              {canResend ? 'Resend' : `Resend in ${timeLeft}s`}
            </Text>
          </Text>
        </View>

        {/* Verify Button */}
        <TouchableOpacity
          style={[
            styles.verifyButton,
            { opacity: isOtpComplete ? 1 : 0.5 },
          ]}
          onPress={handleVerify}
          disabled={!isOtpComplete}
        >
          <Text style={styles.verifyButtonText}>Verify Code</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>

        {/* Help Text */}
        <Text style={styles.helpText}>
          Having trouble? Contact our support team
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingHorizontal: 20,
    paddingBottom: 12,
  },
  backButton: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },
  content: {
    padding: 28,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSec,
    marginBottom: 32,
    textAlign: 'center',
    lineHeight: 20,
  },
  otpContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
    justifyContent: 'center',
  },
  otpBox: {
    width: 64,
    height: 64,
    backgroundColor: COLORS.inputBg,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.text,
  },
  otpBoxFilled: {
    borderColor: COLORS.green,
    backgroundColor: 'rgba(76, 175, 125, 0.05)',
    color: COLORS.green,
  },
  resendContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  resendText: {
    fontSize: 13,
    color: COLORS.textSec,
    textAlign: 'center',
  },
  resendLink: {
    fontWeight: '700',
    color: COLORS.green,
  },
  verifyButton: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  verifyButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
  helpText: {
    fontSize: 12,
    color: COLORS.textSec,
    textAlign: 'center',
    marginTop: 8,
  },
});