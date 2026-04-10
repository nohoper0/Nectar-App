import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons, Ionicons, AntDesign } from '@expo/vector-icons';

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

export default function SignInHubScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Decoration */}
      <View style={styles.topDecoration}>
        <View style={[styles.circle, styles.circle1]} />
        <View style={[styles.circle, styles.circle2]} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Get your</Text>
        <Text style={styles.titleHighlight}>groceries</Text>
        <Text style={styles.subtitle}>Fresh items delivered to your door</Text>

        {/* Vegetable Icons */}
        <View style={styles.veggieContainer}>
          <Text style={styles.veggie}>🥕</Text>
          <Text style={styles.veggie}>🥦</Text>
          <Text style={styles.veggie}>🍅</Text>
        </View>

        <View style={styles.buttonsContainer}>
          {/* Continue with Phone */}
          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() => navigation.navigate('Phone')}
          >
            <Ionicons name="call" size={20} color={COLORS.white} />
            <Text style={styles.primaryBtnText}>Continue with Phone</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Login')}
          >
            <Ionicons name="mail" size={20} color={COLORS.green} />
            <Text style={styles.secondaryBtnText}>Login with Email</Text>
          </TouchableOpacity>

          {/* Register */}
          <TouchableOpacity
            style={styles.secondaryBtn}
            onPress={() => navigation.navigate('Register')}
          >
            <MaterialCommunityIcons name="account-plus" size={20} color={COLORS.green} />
            <Text style={styles.secondaryBtnText}>Create Account</Text>
          </TouchableOpacity>
        </View>

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

        {/* Terms */}
        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
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
  topDecoration: {
    height: 180,
    backgroundColor: COLORS.greenLight,
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
  content: {
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: COLORS.textSec,
    marginBottom: 2,
  },
  titleHighlight: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSec,
    marginBottom: 24,
  },
  veggieContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 32,
  },
  veggie: {
    fontSize: 32,
  },
  buttonsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  primaryBtn: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  primaryBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  secondaryBtn: {
    height: 54,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  secondaryBtnText: {
    color: COLORS.text,
    fontSize: 14,
    fontWeight: '600',
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
  termsText: {
    fontSize: 11,
    color: COLORS.textSec,
    textAlign: 'center',
    marginTop: 16,
    lineHeight: 18,
  },
  termsLink: {
    color: COLORS.green,
    fontWeight: '700',
  },
});