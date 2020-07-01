import axios from 'axios';
const KEY = ''; //insérer une clé api youtube

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet,id',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})