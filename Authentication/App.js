import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import * as LocalAuthentication from "expo-local-authentication"
export default function App() {
  const Open = async() =>{
    const status = await LocalAuthentication.hasHardwareAsync()
    console.log("hardware",status)
    const isEnrolled = await LocalAuthentication.isEnrolledAsync()
    console.log("Enrolled",isEnrolled)
    const result = await LocalAuthentication.authenticateAsync()
    console.log(result)
  }
  return (
    <View style={{ marginTop: 100 }}>
      <Button onPress={Open} title="Click" />
    </View>
  );
}