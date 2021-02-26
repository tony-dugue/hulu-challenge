const API_KEY = 'fe1a9d25b595c2fba47b0c856a336050';

export default {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr-FR`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr-FR`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr-FR`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr-FR`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr-FR`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648&language=fr-FR`,
    fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878&language=fr-FR`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37&language=fr-FR`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=fr-FR`,
    fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770&language=fr-FR`
}
