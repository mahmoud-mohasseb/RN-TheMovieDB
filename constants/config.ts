const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "e99920e243cbf39e20dddcbb5ff297ee";
const Images = "https://image.tmdb.org/t/p/w1280";
const Trending = `${API_URL}/trending/all/day?api_key=${API_KEY}`;
const Discover = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
// tvpopular & airingtoday

// const TvPopular = `${API_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=3`;
const AiringToday = `${API_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`;

// const Trending = `https://api.themoviedb.org/3/discover/movie?api_key=e99920e243cbf39e20dddcbb5ff297ee&language=en-US&with_crew=true&with_people=false&with_cast=false`;

// const search = `${API_URL}/search/movie?api_key=${API_KEY}&query=Jack+Reacher`;

// https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=e99920e243cbf39e20dddcbb5ff297ee&language=en-US

// const search = `https://api.themoviedb.org/3/search/movie?api_key=e99920e243cbf39e20dddcbb5ff297ee&query=Jack+Reacher`;

// const Regions = `${API_URL}/search/movie?api_key=${API_KEY}&query=whiplash&language=ar-EG&region=EG`;

export { Images, Trending, Discover, API_URL, API_KEY, AiringToday };
