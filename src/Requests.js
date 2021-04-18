const requests = {
  getTrending: `/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  getNetflixOriginals: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_networks=213`,
  getTvComedies: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  getCrimeMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=80`,
  getDocumentaries: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=99`,
  getActionMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=28`,
  getHorrorMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=27`,
  getTopRated: `/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`,
  getRomanceMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10749`,
  getTvFamily: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  getFamilyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  getComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  getThrillerMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`,
  getDramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
  getAdventureMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=12`,
  getAnimationMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=16`,
  getFantasyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=14`,
  getHistoryMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=36`,
  getSciFiMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=878`,
};

export default requests;
