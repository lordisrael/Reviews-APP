import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {globalStyles} from "../styles/global";

export default function About() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text>About Screen</Text>
    </SafeAreaView>
  );
}

