import axios from 'axios';

// library used for when youre making request to a server
const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})

export default instance;