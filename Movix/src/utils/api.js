import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";

// const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDllNmY1NDU4NjA4YjM3ZGVlN2MxMWUwNGQxMzg3YiIsInN1YiI6IjY1Y2I2ZDU4MDA1MDhhMDE3YjQyOGQ3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gpZsVTj15vOOh9r4ZxJueVI6aocC2x_lIa8oORgVmp8',
};


export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get
            (BASE_URL + url, {
                headers,
                params,
            })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }

}

