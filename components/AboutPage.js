import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Navbar from './Navbar'; // Import the Navbar component

const AboutPage = ({ navigation }) => { // Add navigation prop
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Navbar navigation={navigation} /> {/* Add Navbar here */}
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradientBackground}
      >
        <View style={styles.container}>
          <Animatable.View animation="fadeInDown" duration={1500} style={styles.header}>
            <Image
              source={{ uri: 'https://via.placeholder.com/500' }} // Replace with your logo
              style={styles.logo}
            />
            <Text style={styles.title}>About Sejdiu Analitik</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" duration={1500} style={styles.card}>
            <Text style={styles.description}>
              Sejdiu Analitik was founded in 2018 with a vision to provide accurate and insightful news analysis.
              Over the years, we have grown to become a trusted source for thousands of readers.
            </Text>

            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>📈</Text>
                <Text style={styles.statText}>Total Viewers: 1000000+</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statIcon}>📰</Text>
                <Text style={styles.statText}>Articles Published: 230780</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('Thank you for visiting!')}
            >
              <Text style={styles.buttonText}>Get In Touch</Text>
            </TouchableOpacity>
          </Animatable.View>

          <Text style={styles.footer}>Thank you for your support! 🚀</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  gradientBackground: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 10,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 24,
  },
  statsContainer: {
    marginBottom: 25,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  statText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  button: {
    backgroundColor: '#0077b6',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 15,
    shadowColor: '#0077b6',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    marginTop: 30,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.8,
  },
});

export default AboutPage;