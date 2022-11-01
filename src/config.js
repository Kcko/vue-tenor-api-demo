const API_KEY = 'AIzaSyCcvpThn1s8BUROwghs4aplxPTr_46OREY'

export default {
  searchTtl: 200,
  trendingUrl: `https://tenor.googleapis.com/v2/featured?limit=12&key=${API_KEY}`,
  searchUrl: `https://tenor.googleapis.com/v2/search?limit=12&key=${API_KEY}&q=`
}
