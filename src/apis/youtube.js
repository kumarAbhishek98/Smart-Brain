import axios from 'axios';

const KEY = 'AIzaSyDAiC5VpYDG8eIfwRgJSLMoA6ZLz4rMpYg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});
