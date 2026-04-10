import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

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

const COUNTRY_CODES = [
  { name: 'United States', code: '+1', flag: '🇺🇸' },
  { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
  { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
  { name: 'Canada', code: '+1', flag: '🇨🇦' },
  { name: 'Australia', code: '+61', flag: '🇦🇺' },
  { name: 'India', code: '+91', flag: '🇮🇳' },
  { name: 'Singapore', code: '+65', flag: '🇸🇬' },
  { name: 'Thailand', code: '+66', flag: '🇹🇭' },
];

export default function PhoneScreen({ navigation }) {
  const [phone, setPhone] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[1]); // Vietnam
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    if (phone.length >= 9) {
      navigation.navigate('Verify');
    }
  };

  const renderCountryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => {
        setSelectedCountry(item);
        setShowModal(false);
      }}
    >
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <View style={{ flex: 1 }}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryCode}>{item.code}</Text>
      </View>
      {selectedCountry.code === item.code && (
        <Ionicons name="checkmark" size={24} color={COLORS.green} />
      )}
    </TouchableOpacity>
  );

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
        <Text style={styles.headerTitle}>Phone Number</Text>
        <View style={{ width: 36 }} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.subtitle}>We'll send you a verification code</Text>

        {/* Phone Input */}
        <View style={styles.phoneInputGroup}>
          {/* Country Code Selector */}
          <TouchableOpacity
            style={styles.countryCodeButton}
            onPress={() => setShowModal(true)}
          >
            <Text style={styles.countryCodeText}>{selectedCountry.code}</Text>
            <Ionicons name="chevron-down" size={20} color={COLORS.text} />
          </TouchableOpacity>

          {/* Phone Number Input */}
          <TextInput
            style={styles.phoneInput}
            placeholder="9876543210"
            placeholderTextColor={COLORS.border}
            keyboardType="number-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={10}
          />
        </View>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <MaterialCommunityIcons
            name="information-outline"
            size={20}
            color={COLORS.green}
          />
          <Text style={styles.infoText}>
            Enter your phone number to verify your account and proceed with orders
          </Text>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={[
            styles.nextButton,
            { opacity: phone.length >= 9 ? 1 : 0.5 },
          ]}
          onPress={handleNext}
          disabled={phone.length < 9}
        >
          <Text style={styles.nextButtonText}>Send Code</Text>
          <Ionicons name="arrow-forward" size={20} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Country Modal */}
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity onPress={() => setShowModal(false)}>
                <Ionicons name="close" size={24} color={COLORS.text} />
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.searchInput}
              placeholder="Search country..."
              placeholderTextColor={COLORS.textSec}
            />

            <FlatList
              data={COUNTRY_CODES}
              renderItem={renderCountryItem}
              keyExtractor={(item, index) => index.toString()}
              scrollEnabled={true}
            />
          </View>
        </View>
      </Modal>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textSec,
    marginBottom: 28,
  },
  phoneInputGroup: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  countryCodeButton: {
    width: 80,
    height: 52,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.border,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  countryCodeText: {
    fontWeight: '700',
    fontSize: 15,
    color: COLORS.text,
  },
  phoneInput: {
    flex: 1,
    height: 52,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1.5,
    borderColor: COLORS.green,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    letterSpacing: 2,
  },
  infoBox: {
    backgroundColor: 'rgba(76, 175, 125, 0.1)',
    borderLeftWidth: 4,
    borderLeftColor: COLORS.green,
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  infoText: {
    flex: 1,
    fontSize: 12,
    color: COLORS.textSec,
    lineHeight: 18,
  },
  nextButton: {
    height: 54,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
  },
  nextButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '85%',
    paddingBottom: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
  },
  searchInput: {
    margin: 12,
    padding: 12,
    backgroundColor: COLORS.inputBg,
    borderRadius: 8,
    fontSize: 14,
    color: COLORS.text,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  countryFlag: {
    fontSize: 24,
  },
  countryName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },
  countryCode: {
    fontSize: 12,
    color: COLORS.textSec,
  },
});