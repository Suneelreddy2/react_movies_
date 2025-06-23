const API_KEY = "66a093b3";
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

// Search movies by query
export const searchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}&s=${encodeURIComponent(query)}`);
  const data = await response.json();

  return data.Search || [];
};

// Simulate popular movies by default search for "Batman"
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}&s=Avengers`);
  const data = await response.json();

  return data.Search || [];
};
