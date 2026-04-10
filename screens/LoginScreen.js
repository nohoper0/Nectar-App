import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
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
};

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Success', `Logged in as ${email}`);
    }, 1500);
  };

  const isFormValid = email.length > 0 && password.length >= 6;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Decoration */}
      <View style={styles.headerDecoration}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
        <Text style={styles.headerEmoji}>🥕</Text>
        <Text style={[styles.headerEmoji, { bottom: 12, left: 20, fontSize: 22 }]}>
          🥦
        </Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Enter your credentials below</Text>

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
              placeholder="Enter your password"
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

        {/* Forgot Password Link */}
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={[
            styles.loginButton,
            { opacity: isFormValid && !loading ? 1 : 0.6 },
          ]}
          onPress={handleLogin}
          disabled={!isFormValid || loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Login'}
          </Text>
          {!loading && (
            <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
          )}
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Logins */}
        <TouchableOpacity style={styles.socialBtn}>
          <AntDesign name="google" size={20} color="#3c3c3c" />
          <Text style={styles.socialBtnText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.socialBtn, { borderColor: '#4267B2' }]}>
          <Ionicons name="logo-facebook" size={20} color="#4267B2" />
          <Text style={[styles.socialBtnText, { color: '#4267B2' }]}>
            Continue with Facebook
          </Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.signupLink}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    height: 140,
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
    width: 200,
    height: 200,
    top: -50,
    right: -50,
  },
  circle2: {
    width: 150,
    height: 150,
    bottom: -30,
    left: -30,
  },
  headerEmoji: {
    position: 'absolute',
    fontSize: 28,
    top: 16,
    right: 24,
    transform: [{ rotate: '25deg' }],
    zIndex: 1,
  },
  content: {
    padding: 24,
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
    paddingRight: 16,
    fontSize: 15,
    color: COLORS.text,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    zIndex: 1,
    padding: 8,
  },
  forgotPasswordContainer: {
    marginBottom: 20,
    alignItems: 'flex-end',
  },
  forgotPassword: {
    fontSize: 12,
    color: COLORS.green,
    fontWeight: '700',
  },
  loginButton: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
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
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 16,
  },
  signupText: {
    fontSize: 13,
    color: COLORS.textSec,
  },
  signupLink: {
    fontSize: 13,
    color: COLORS.green,
    fontWeight: '700',
  },
});