const fetch = require('node-fetch');

const url = 'https://medium2.p.rapidapi.com/user/6e2475a6e38a/articles?next=1625519209064';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // Replace with your actual API key
    'x-rapidapi-host': 'medium2.p.rapidapi.com'
  }
};

const fetchArticles = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Convert response to JSON
    console.log(result);
  } catch (error) {
    console.error('Error fetching articles:', error);
  }
};

fetchArticles();
