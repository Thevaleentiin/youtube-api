import axios from 'axios';
const KEY = 'AIzaSyCF6-GvufNLLFiW7pcz9PgNdQWX7dhz2AU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,id',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})