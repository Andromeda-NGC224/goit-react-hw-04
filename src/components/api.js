import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/`;

export const fetchImg = async (searchQuery) => {
  const response = await axios.get(`search/photos/`, {
    params: {
      client_id: `6p0keLQUHzQzr6IA0q0YR_JyZD57g8hMu-E4H2DXlL0`,
      query: searchQuery,
    },
  });
  return response.data.results;
};
