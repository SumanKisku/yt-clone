import axios from 'axios'

const key = process.env.YOUTUBE_API_KEY;
console.log(key);

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        key: key,
        part: "snippet",
        maxResults: 5,
    }
})