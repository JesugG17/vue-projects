import axios from "axios";

export const gifApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=gB9IisiOCiVLI13yVzpRasNNc1qpsloU&q=',
})