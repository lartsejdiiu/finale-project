import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Navbar from './Navbar'; // Import the Navbar component

const ArticlesScreen = ({ route, navigation }) => { // Add navigation prop
  const { categoryId } = route.params;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch articles based on the selected category ID
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?sources=${categoryId}&pageSize=50&apiKey=e194fe7687b9461387930c101c68ed48`
        );
        setArticles(response.data.articles || []);
      } catch (error) {
        console.error('Error fetching articles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [categoryId]);

  // Render each article in a grid layout
  const renderArticle = ({ item }) => (
    <TouchableOpacity style={styles.articleItem}>
      {/* Display the article image if available */}
      {item.urlToImage && (
        <Image
          source={{ uri: item.urlToImage }}
          style={styles.articleImage}
          resizeMode="cover"
        />
      )}
      <Text style={styles.articleTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.articleDescription} numberOfLines={3}>
        {item.description}
      </Text>
    </TouchableOpacity>
  );

  // Show a loading indicator while fetching data
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0077b6" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} /> {/* Add Navbar here */}
      <View style={styles.container}>
        <Text style={styles.title}>Articles</Text>
        <FlatList
          data={articles}
          keyExtractor={(item) => item.url}
          renderItem={renderArticle}
          numColumns={3} // Set the number of columns (3 or 4)
          contentContainerStyle={styles.flatListContainer}
          showsVerticalScrollIndicator={true} // Enable vertical scrollbar
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  flatListContainer: {
    justifyContent: 'space-between',
  },
  articleItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    padding: 10,
    maxWidth: Dimensions.get('window').width / 3 - 10, // Adjust width for 3 columns
  },
  articleImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  articleDescription: {
    fontSize: 12,
    color: '#777',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ArticlesScreen;