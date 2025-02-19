import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./components/Home"; // Import Home from components folder

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
});

export default App;
