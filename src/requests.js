const API_KEY = "bae98d9ef03005e4e4930f560f11ccfd";

export default [
  {
    title: "NETFLIX ORIGINALS",
    fetchUrl: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    title: "Trending",
    fetchUrl: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Top Rated",
    fetchUrl: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  {
    title: "Action",
    fetchUrl: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    title: "Comedy",
    fetchUrl: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    title: "Horror",
    fetchUrl: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    title: "Romace",
    fetchUrl: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    title: "Documentaries",
    fetchUrl: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];
