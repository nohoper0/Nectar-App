import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  green: '#4CAF7D',
  white: '#FFFFFF',
  text: '#1A1A2E',
  textSec: '#7C8BA0',
  textMuted: '#B0BAC9',
  border: '#E8EDF2',
  bg: '#F7F9FC',
  inputBg: '#F4F6FA',
  greenLight: '#E8F5EE',
};

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Onboarding');
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Onboarding')}
      activeOpacity={0.95}
    >
      <View style={styles.content}>
        <View style={styles.logoIcon}>
          <MaterialCommunityIcons name="leaf" size={40} color={COLORS.white} />
        </View>
        
        <Text style={styles.logo}>nectar</Text>
        <Text style={styles.sub}>online groceries</Text>
        
        <Text style={styles.hint}>Tap to continue →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    width: 72,
    height: 72,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logo: {
    fontSize: 38,
    fontWeight: '700',
    color: COLORS.white,
    letterSpacing: -1,
  },
  sub: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.75)',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
  hint: {
    marginTop: 32,
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.5)',
  },
});