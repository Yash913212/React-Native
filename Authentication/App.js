import React from "react";
import { View, Button, Alert } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
export default function App() {
  const Open = async () => {
    try {
      const status = await LocalAuthentication.hasHardwareAsync();
      console.log("hardware", status);
      if (!status) {
        Alert.alert("Unavailable", "Biometric hardware is not available on this device.");
        return;
      }

      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
      console.log("Enrolled", isEnrolled);
      if (!isEnrolled) {
        Alert.alert("Not Enrolled", "No biometric records found. Please enroll first.");
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: "Authenticate",
        fallbackLabel: "Use Passcode",
      });
      console.log(result);
    } catch (error) {
      console.log("Authentication error", error);
      Alert.alert("Error", "Authentication failed. Please try again.");
    }
  };
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={Open} title="Click" />
    </View>
  );
}