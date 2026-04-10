import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Animated,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const COLORS = {
  green: '#4CAF7D',
  greenDark: '#3A9166',
  white: '#FFFFFF',
  text: '#1A1A2E',
  textSec: '#7C8BA0',
  textMuted: '#B0BAC9',
  border: '#E8EDF2',
  bg: '#F7F9FC',
  inputBg: '#F4F6FA',
  greenLight: '#E8F5EE',
  red: '#E74C3C',
};

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (text) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const validatePassword = (text) => {
    return text.length >= 6;
  };

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (!agreed) {
      Alert.alert('Error', 'You must agree to the terms and conditions');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', `Account created for ${username}`);
      navigation.navigate('Login');
    }, 1500);
  };

  const isFormValid =
    username.length > 0 &&
    email.length > 0 &&
    validatePassword(password) &&
    password === confirmPassword &&
    agreed;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Decoration */}
      <View style={styles.headerDecoration}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <Text style={styles.headerEmoji}>🥕</Text>
        <Text style={[styles.headerEmoji, { bottom: 10, left: 18, fontSize: 22 }]}>
          🍊
        </Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join Nectar to start shopping</Text>

        {/* Username Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="account-outline"
              size={20}
              color={COLORS.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Choose a username"
              placeholderTextColor={COLORS.border}
              value={username}
              onChangeText={setUsername}
            />
          </View>
        </View>

        {/* Email Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="email-outline"
              size={20}
              color={COLORS.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="your@email.com"
              placeholderTextColor={COLORS.border}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
            />
            {email.length > 0 && (
              <Ionicons
                name={validateEmail(email) ? 'checkmark-circle' : 'close-circle'}
                size={20}
                color={validateEmail(email) ? COLORS.green : COLORS.red}
                style={styles.checkIcon}
              />
            )}
          </View>
        </View>

        {/* Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="lock-outline"
              size={20}
              color={COLORS.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="At least 6 characters"
              placeholderTextColor={COLORS.border}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              <Ionicons
                name={showPassword ? 'eye' : 'eye-off'}
                size={20}
                color={COLORS.textMuted}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputWrapper}>
            <MaterialCommunityIcons
              name="lock-check-outline"
              size={20}
              color={COLORS.textMuted}
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.input}
              placeholder="Repeat your password"
              placeholderTextColor={COLORS.border}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {confirmPassword.length > 0 && (
              <Ionicons
                name={
                  password === confirmPassword ? 'checkmark-circle' : 'close-circle'
                }
                size={20}
                color={password === confirmPassword ? COLORS.green : COLORS.red}
                style={styles.checkIcon}
              />
            )}
            {!showConfirmPassword && (
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeIcon}
              >
                <Ionicons
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  size={20}
                  color={COLORS.textMuted}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* Terms Checkbox */}
        <TouchableOpacity
          style={styles.agreeContainer}
          onPress={() => setAgreed(!agreed)}
        >
          <View
            style={[
              styles.checkbox,
              agreed && styles.checkboxActive,
            ]}
          >
            {agreed && (
              <Ionicons name="checkmark" size={16} color={COLORS.white} />
            )}
          </View>
          <Text style={styles.agreeText}>
            I agree to the{' '}
            <Text style={styles.agreeLink}>Terms of Service</Text> and{' '}
            <Text style={styles.agreeLink}>Privacy Policy</Text>
          </Text>
        </TouchableOpacity>

        {/* Register Button */}
        <TouchableOpacity
          style={[
            styles.registerButton,
            { opacity: isFormValid && !loading ? 1 : 0.6 },
          ]}
          onPress={handleRegister}
          disabled={!isFormValid || loading}
        >
          <Text style={styles.registerButtonText}>
            {loading ? 'Creating account...' : 'Create Account'}
          </Text>
          {!loading && (
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          )}
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Signups */}
        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="google" size={20} color="#3c3c3c" />
          <Text style={styles.socialBtnText}>Sign up with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { borderColor: '#4267B2' }]}>
          <Ionicons name="logo-facebook" size={20} color="#4267B2" />
          <Text style={[styles.socialBtnText, { color: '#4267B2' }]}>
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerDecoration: {
    height: 120,
    backgroundColor: COLORS.greenLight,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'rgba(76, 175, 125, 0.1)',
    borderRadius: 1000,
  },
  circle1: {
    width: 150,
    height: 150,
    top: -40,
    right: -30,
  },
  circle2: {
    width: 120,
    height: 120,
    bottom: -20,
    left: -20,
  },
  headerEmoji: {
    position: 'absolute',
    fontSize: 28,
    top: 12,
    right: 20,
    transform: [{ rotate: '20deg' }],
    zIndex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 28,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSec,
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.textSec,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 7,
  },
  inputWrapper: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    position: 'absolute',
    left: 12,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 52,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 8,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 15,
    color: COLORS.text,
  },
  checkIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    padding: 8,
  },
  agreeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: COLORS.border,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  checkboxActive: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green,
  },
  agreeText: {
    flex: 1,
    fontSize: 11,
    color: COLORS.textSec,
    lineHeight: 16,
  },
  agreeLink: {
    color: COLORS.green,
    fontWeight: '700',
  },
  registerButton: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  registerButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 13,
    color: COLORS.textSec,
  },
  loginLink: {
    fontSize: 13,
    color: COLORS.green,
    fontWeight: '700',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  dividerText: {
    fontSize: 13,
    color: COLORS.textMuted,
  },
  socialBtn: {
    height: 52,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  socialBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
  },
});