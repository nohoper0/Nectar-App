import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/SplashScreen';
import Onboarding from '../screens/OnboardingScreen';
import SignInHub from '../screens/SignInHubScreen';
import Phone from '../screens/PhoneScreen';
import Verify from '../screens/VerifyScreen';
import Location from '../screens/LocationScreen';
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignInHub" component={SignInHub} />
        <Stack.Screen name="Phone" component={Phone} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}