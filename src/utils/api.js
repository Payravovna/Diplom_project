import axios from "axios";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDBmYThkYTZkNjA5YjZjZDAyYWQ4ZTMwZGIxZWEyNCIsIm5iZiI6MTc1MDc2MjkyNy44MzIsInN1YiI6IjY4NWE4NWFmODk4NDFiZTJhODRmNmI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5C39FGfhEa7eT82D0DHJqaC2lrhoS3XoJWbpCjRzFAE"

export const api = axios.create({
    baseURL:"https://api.themoviedb.org/3/" ,
    headers:{
        Authorization: `Bearer ${accessToken}`
    },
    params: {
        language: "ru-Ru"
    }
})
