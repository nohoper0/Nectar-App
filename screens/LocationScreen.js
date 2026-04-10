import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Alert,
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

const LOCATIONS = [
  { id: 1, name: 'Home', address: '123 Main St, New York, NY' },
  { id: 2, name: 'Work', address: '456 Business Ave, New York, NY' },
  { id: 3, name: 'Other', address: 'Select on map' },
];

export default function LocationScreen({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState(LOCATIONS[0]);

  const handleContinue = () => {
    Alert.alert('Location Selected', `You selected: ${selectedLocation.name} - ${selectedLocation.address}`);
    navigation.navigate('Login');
  };

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
        <Text style={styles.headerTitle}>Select Location</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Map Visual */}
        <View style={styles.mapContainer}>
          <View style={styles.mapGrid} />
          <View style={[styles.mapRoad, styles.roadH, { top: '35%' }]} />
          <View style={[styles.mapRoad, styles.roadH, { top: '65%' }]} />
          <View style={[styles.mapRoad, styles.roadV, { left: '30%' }]} />
          <View style={[styles.mapRoad, styles.roadV, { left: '70%' }]} />

          {/* Pin */}
          <View style={styles.pinContainer}>
            <View style={styles.pulse} />
            <View style={styles.pinIcon} />
          </View>
        </View>

        <Text style={styles.title}>Select delivery location</Text>
        <Text style={styles.subtitle}>Where should we deliver your groceries?</Text>

        {/* Saved Locations */}
        <View style={styles.locationsContainer}>
          {LOCATIONS.map((location) => (
            <TouchableOpacity
              key={location.id}
              style={[
                styles.locationCard,
                selectedLocation.id === location.id && styles.locationCardActive,
              ]}
              onPress={() => setSelectedLocation(location)}
            >
              <View style={styles.locationCardContent}>
                <View
                  style={[
                    styles.locationIcon,
                    selectedLocation.id === location.id && styles.locationIconActive,
                  ]}
                >
                  <Ionicons
                    name={
                      location.id === 1
                        ? 'home'
                        : location.id === 2
                        ? 'briefcase'
                        : 'location'
                    }
                    size={20}
                    color={
                      selectedLocation.id === location.id
                        ? COLORS.white
                        : COLORS.green
                    }
                  />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.locationName}>{location.name}</Text>
                  <Text style={styles.locationAddress}>{location.address}</Text>
                </View>
              </View>
              {selectedLocation.id === location.id && (
                <Ionicons name="checkmark-circle" size={24} color={COLORS.green} />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Add New Address */}
        <TouchableOpacity style={styles.addAddressButton}>
          <Ionicons name="add-circle-outline" size={24} color={COLORS.green} />
          <Text style={styles.addAddressText}>Add new address</Text>
        </TouchableOpacity>

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
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
    padding: 20,
    paddingBottom: 28,
  },
  mapContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.greenLight,
    borderRadius: 14,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  mapGrid: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage:
      'linear-gradient(rgba(76,175,125,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(76,175,125,0.15) 1px, transparent 1px)',
    backgroundSize: '30px 30px',
    backgroundColor: 'transparent',
  },
  mapRoad: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 2,
  },
  roadH: {
    height: 8,
    left: 0,
    right: 0,
  },
  roadV: {
    width: 8,
    top: 0,
    bottom: 0,
  },
  pinContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    position: 'relative',
  },
  pulse: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORS.green,
    opacity: 0.3,
  },
  pinIcon: {
    width: 48,
    height: 48,
    backgroundColor: COLORS.green,
    borderRadius: 24,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.green,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
    transform: [{ rotate: '-45deg' }],
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSec,
    marginBottom: 20,
  },
  locationsContainer: {
    gap: 12,
    marginBottom: 20,
  },
  locationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 14,
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 12,
  },
  locationCardActive: {
    backgroundColor: COLORS.greenLight,
    borderColor: COLORS.green,
  },
  locationCardContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  locationIcon: {
    width: 44,
    height: 44,
    backgroundColor: COLORS.green,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.15,
  },
  locationIconActive: {
    backgroundColor: COLORS.green,
    opacity: 1,
  },
  locationName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  locationAddress: {
    fontSize: 12,
    color: COLORS.textSec,
    marginTop: 2,
  },
  addAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    marginBottom: 20,
    backgroundColor: COLORS.bg,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.border,
  },
  addAddressText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.green,
  },
  continueButton: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  continueButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
});