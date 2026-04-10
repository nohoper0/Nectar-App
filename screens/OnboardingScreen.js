import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const COLORS = {
  green: '#4CAF7D',
  white: '#FFFFFF',
  text: '#1A1A2E',
  textSec: '#7C8BA0',
  border: '#E8EDF2',
  bg: '#F7F9FC',
  inputBg: '#F4F6FA',
};

const SCREEN_WIDTH = Dimensions.get('window').width;

const onboardingSlides = [
  {
    id: 1,
    title: 'Fresh Groceries',
    subtitle: 'Get fresh groceries delivered to your door in minutes',
    emoji: '🥗',
  },
  {
    id: 2,
    title: 'Fast Delivery',
    subtitle: 'Quick and reliable delivery service',
    emoji: '🚚',
  },
  {
    id: 3,
    title: 'Best Prices',
    subtitle: 'Great deals and discounts on all items',
    emoji: '✨',
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < onboardingSlides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.navigate('SignInHub');
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const slide = onboardingSlides[currentIndex];

  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <View style={styles.decorativeCircles}>
          <View style={[styles.circle, styles.circle1]} />
          <View style={[styles.circle, styles.circle2]} />
          <View style={[styles.circle, styles.circle3]} />
        </View>
        <Text style={styles.emoji}>{slide.emoji}</Text>
      </View>

      {/* Content Section */}
      <View style={styles.contentSection}>
        {/* Dots Indicator */}
        <View style={styles.dotsContainer}>
          {onboardingSlides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                index === currentIndex && styles.dotActive,
              ]}
            />
          ))}
        </View>

        <Text style={styles.title}>{slide.title}</Text>
        <Text style={styles.description}>{slide.subtitle}</Text>

        {/* Navigation Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.prevButton}
            onPress={handlePrev}
            disabled={currentIndex === 0}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color={currentIndex === 0 ? COLORS.border : COLORS.text}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNext}
          >
            <Ionicons name="chevron-forward" size={28} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  heroSection: {
    height: 360,
    backgroundColor: '#2d5a40',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeCircles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  circle: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
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
  circle3: {
    width: 100,
    height: 100,
    bottom: 50,
    right: 30,
  },
  emoji: {
    fontSize: 100,
    zIndex: 1,
  },
  contentSection: {
    flex: 1,
    padding: 28,
    justifyContent: 'space-between',
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
  },
  dotActive: {
    backgroundColor: COLORS.green,
    width: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 10,
    lineHeight: 35,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSec,
    lineHeight: 22,
    marginBottom: 28,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
  prevButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton: {
    flex: 1,
    height: 56,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});   