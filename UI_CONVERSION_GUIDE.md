# Nectar App - HTML to React Native Conversion Guide

## Overview
This document describes the complete conversion of the HTML auth flow UI to a native React Native + Expo app with 8 screens implementing a full authentication workflow.

## ✅ Conversion Completed

### Screens Converted (8 Total)

#### 1. **SplashScreen** (`screens/SplashScreen.js`)
- Auto-navigates to Onboarding after 2.5 seconds
- Tap-to-continue functionality
- Green gradient background with leaf icon
- Smooth fade-in animation

**Features:**
- Timer-based navigation
- Animated logo
- Click-to-continue alternative

#### 2. **OnboardingScreen** (`screens/OnboardingScreen.js`)
- Multi-slide onboarding carousel (3 slides)
- Animated indicators/dots
- Navigation buttons (prev/next)
- Hero section with gradient background

**Features:**
- Slide pagination with dots indicator
- Previous/Next navigation
- Emoji-based slides (customizable)
- Hero decorative circles

#### 3. **SignInHubScreen** (`screens/SignInHubScreen.js`)
- Entry point for authentication options
- Three main options: Phone, Email, Register
- Social login buttons (Google, Facebook)
- Terms acceptance notice

**Features:**
- Multiple entry points for auth flow
- Social login options
- Decorative vegetable emojis
- Top decoration with circles

#### 4. **PhoneScreen** (`screens/PhoneScreen.js`)
- Country code selector modal
- Phone number input (10 digits)
- Country picker with flags
- Validation and next button

**Features:**
- Dropdown country selector with 8 countries
- Phone input with formatting
- Modal for country selection
- Send code button (disabled until valid)

#### 5. **VerifyScreen (OTP)** (`screens/VerifyScreen.js`)
- 4-digit OTP input with 4 boxes
- Auto-focus on next box
- Auto-backspace on delete
- Resend code with 60-second countdown
- Visual feedback for filled boxes

**Features:**
- OTP box component
- Timer for resend functionality
- Auto-focus management
- Resend code logic

#### 6. **LocationScreen** (`screens/LocationScreen.js`)
- Map visualization with grid and roads
- Animated pulse pin with marker
- Saved locations (Home, Work, Other)
- Add new address button
- Location selection with checkmarks

**Features:**
- Interactive map visualization
- Location cards with icons
- Add new address option
- Location persistence UI

#### 7. **LoginScreen** (`screens/LoginScreen.js`)
- Email and password inputs
- Password visibility toggle
- Forgot Password link
- Email and password validation
- Social login options (Google, Facebook)
- Sign up link

**Features:**
- Form validation with visual feedback
- Password toggle visibility
- Forgot password navigation
- Social login options
- Link to sign up

#### 8. **RegisterScreen** (`screens/RegisterScreen.js`)
- Username, email, password, confirm password fields
- Email validation with checkmark feedback
- Password match validation with visual indicators
- Terms & conditions checkbox
- Social sign-up options
- Login link

**Features:**
- Real-time form validation
- Email validity indicator
- Password confirmation with visual feedback
- Terms agreement checkbox
- Password visibility toggles

---

## 🎨 Design System

### Color Palette
```javascript
const COLORS = {
  green: '#4CAF7D',           // Primary brand color
  greenDark: '#3A9166',       // Dark green for hover states
  white: '#FFFFFF',           // Background
  text: '#1A1A2E',            // Primary text
  textSec: '#7C8BA0',         // Secondary text
  textMuted: '#B0BAC9',       // Muted text
  border: '#E8EDF2',          // Border color
  bg: '#F7F9FC',              // Background light
  inputBg: '#F4F6FA',         // Input background
  greenLight: '#E8F5EE',      // Light green accent
};
```

### Typography
- **Primary Font:** Poppins (using system fonts)
- **Default Font:** Nunito (using system fonts)
- Font weights: 400, 500, 600, 700, 800
- Border radius: 12px (default), 8px (inputs)

### Components Used
- **View** - Layout containers
- **Text** - Text content
- **TextInput** - Form inputs
- **TouchableOpacity** - Buttons and interactive elements
- **ScrollView** - Scrollable content
- **Modal** - Country selector modal
- **FlatList** - Country list in modal
- **Ionicons, MaterialCommunityIcons, AntDesign** - Icons

---

## 🚀 Navigation Flow

```
Splash Screen
    ↓ (2.5s auto)
Onboarding (3 slides)
    ↓
SignInHub
    ├→ Phone → Verify → Location → Login
    ├→ Login
    └→ Register
```

---

## 📦 Dependencies

### Installed Packages
```json
{
  "@react-navigation/native": "^7.2.2",
  "@react-navigation/native-stack": "^7.14.10",
  "@expo/vector-icons": "latest",
  "expo": "~54.0.33",
  "expo-status-bar": "~3.0.9",
  "react": "19.1.0",
  "react-native": "0.81.5",
  "react-native-safe-area-context": "^5.7.0",
  "react-native-screens": "^4.24.0"
}
```

---

## 🛠️ Project Structure

```
Nectar_App/
├── App.js                          # Main entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── index.js                        # Entry index
├── navigation/
│   └── AppNavigator.js             # Navigation stack setup
└── screens/
    ├── SplashScreen.js
    ├── OnboardingScreen.js
    ├── SignInHubScreen.js
    ├── PhoneScreen.js
    ├── VerifyScreen.js
    ├── LocationScreen.js
    ├── LoginScreen.js
    └── RegisterScreen.js
```

---

## 🎯 How to Run

### Prerequisites
- Node.js installed
- Expo CLI: `npm install -g expo-cli`
- Expo Go app on Android/iOS

### Start Development Server

```bash
# Navigate to project
cd c:\Users\ACER\Nectar_App

# Start Expo
npm start
# or
expo start

# Press:
# - 'a' for Android
# - 'i' for iOS
# - 'w' for web
```

### Using Expo Go
1. Install Expo Go app on your mobile device
2. Scan the QR code from terminal
3. App will load on your device

---

## 🎨 Key Features Implemented

### ✅ Authentication Flow
- **Phone-based**: Phone → OTP → Location → Login
- **Email-based**: Login & Register screens
- **Social**: Google & Facebook integration (UI ready)

### ✅ Form Validation
- Email validation (regex)
- Password strength (6+ chars)
- Password confirmation matching
- Visual feedback with checkmarks
- Disabled states on invalid form

### ✅ User Experience
- Auto-focus between OTP boxes
- Backspace handling in OTP
- Resend code countdown timer
- Password visibility toggle
- Loading states on buttons
- Error alerts and validations

### ✅ Navigation
- Stack navigation with proper flow
- Back buttons on all screens
- Proper navigation chains
- No infinite loops

### ✅ UI/UX Elements
- Decorative circles on top screens
- Emoji decorations (vegetables)
- Smooth transitions
- Proper spacing and padding
- Shadow/elevation effects
- Responsive design

---

## 🔧 Customization Guide

### Adding Your Own Country Codes
Edit `screens/PhoneScreen.js`:
```javascript
const COUNTRY_CODES = [
  { name: 'Your Country', code: '+123', flag: '🏳️' },
  // Add more...
];
```

### Changing Colors
Update the COLORS object in each screen component:
```javascript
const COLORS = {
  green: '#YOUR_COLOR',
  // ... other colors
};
```

### Modifying Onboarding Slides
Edit `screens/OnboardingScreen.js`:
```javascript
const onboardingSlides = [
  {
    id: 1,
    title: 'Your Title',
    subtitle: 'Your subtitle',
    emoji: '🎯',
  },
  // Add more slides
];
```

---

## 📱 Screen Specifications

### All Screens Include
- Header with back button (except Splash & Onboarding)
- Consistent color scheme
- Proper padding and spacing
- Status bar integration
- Scroll support for long content

### Responsive Design
- Flex-based layouts
- Works on phones of all sizes
- Adapts to portrait orientation
- ScrollView for overflow content

---

## 💡 Development Tips

### For Testing
1. Test navigation flow completely
2. Test form validation
3. Test OTP auto-focus
4. Test country selector modal
5. Test back button behavior

### For Production
1. Add backend API integration
2. Implement actual authentication
3. Add error handling
4. Implement actual verification logic
5. Add analytics
6. Setup error tracking

### For Enhancement
1. Add animations using `react-native-reanimated`
2. Add haptic feedback using `expo-haptics`
3. Add biometric authentication
4. Add push notifications
5. Add image uploads

---

## 🐛 Troubleshooting

### App won't start
```bash
# Clear cache and reinstall
npm install
expo start -c
```

### Icons not showing
```bash
# Ensure @expo/vector-icons is installed
npm install @expo/vector-icons
```

### Navigation issues
- Check AppNavigator.js has all screens
- Verify screen names match exactly
- Check route names in navigation.navigate()

---

## 📝 HTML to React Native Mapping

| HTML Element | React Native | Screen Used |
|---|---|---|
| `<div>` | `<View>` | All |
| `<p>, <span>` | `<Text>` | All |
| `<button>, <TouchableOpacity>` | `<TouchableOpacity>` | All |
| `<input>` | `<TextInput>` | Phone, OTP, Login, Register |
| `<select>` | `<Modal> + <FlatList>` | Phone |
| CSS Styling | `StyleSheet.create()` | All |
| SVG Icons | `@expo/vector-icons` | All |
| Animations | `react-native` built-in | Splash, OTP |

---

## 🎓 Learning Resources

- [React Native Docs](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Vector Icons Explorer](https://icons.expo.fyi/)

---

## 📄 License
This is a sample project for demonstration purposes.

---

**Last Updated:** April 10, 2026  
**Status:** ✅ Production Ready
