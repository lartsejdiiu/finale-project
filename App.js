import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './components/Categories';
import ArticlesScreen from './components/ArticlesScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutPage from './components/AboutPage'; // Import AboutPage
import { View } from 'react-native';

// Create a stack navigator for Categories and ArticlesScreen
const Stack = createStackNavigator();

// Stack Navigator for Categories, Articles, and AboutPage
function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Articles"
        component={ArticlesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={AboutPage} // Add the AboutPage screen
        options={{ headerShown: false }} // You can customize header if needed
      />
    </Stack.Navigator>
  );
}

// HomeScreen component that includes Navbar and HeroSection
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <HeroSection />
    </View>
  );
}

// Main App to show CategoriesStack and the AboutPage navigation
function App() {
  return (
    <NavigationContainer>
      <CategoriesStack /> {/* Render the stack with all screens */}
    </NavigationContainer>
  );
}

export default App;
