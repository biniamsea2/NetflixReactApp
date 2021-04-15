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
  getSciFi: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10765`,
  getWar: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10768`,
  getFamilyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10751`,
  getComedyMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=35`,
  getThrillerMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=53`,
  getDramaTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
  getRealStories: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10764&include_null_first_air_dates=false`,
  getTvSoap: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10766`,
  getDramaMovies: `/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=18`,
  getTalkTv: `/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&with_genres=10767`,
};

export default requests;
