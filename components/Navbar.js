import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navbar = ({ navigation }) => {
  const [hovered, setHovered] = useState(null);
  const [buttonScale] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(buttonScale, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(buttonScale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>Sejdiu Analitik</Text>
      <View style={styles.buttonContainer}>
        {[
          { name: 'Home', icon: 'home-outline', screen: 'Home' },
          { name: 'Categories', icon: 'grid-outline', screen: 'Categories' },
          { name: 'About', icon: 'person-outline', screen: 'About' },
        ].map((item, index) => (
          <Animated.View key={index} style={{ transform: [{ scale: buttonScale }] }}>
            <TouchableOpacity
              style={[styles.button, hovered === item.name && styles.hoveredButton]}
              onPressIn={() => setHovered(item.name)}
              onPressOut={() => setHovered(null)}
              onPress={() => navigation.navigate(item.screen)} // Navigate to the corresponding screen
            >
              <Ionicons name={item.icon} size={24} color="#333" />
              {hovered === item.name && <Text style={styles.hoverText}>{item.name}</Text>}
            </TouchableOpacity>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    height: 80,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  logo: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    position: 'relative',
  },
  hoveredButton: {
    shadowColor: 'rgba(0, 0, 0, 0.8)',
    shadowOpacity: 1,
    shadowRadius: 12,
  },
  hoverText: {
    position: 'absolute',
    top: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
    textAlign: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
  },
});

export default Navbar;