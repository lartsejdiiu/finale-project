import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.content}>
        <HeroSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});

export default Home;
