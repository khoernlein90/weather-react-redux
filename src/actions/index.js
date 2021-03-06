import axios from "axios";

const API_KEY = "a65c06f852cf96da5c0eeea4bf68a311";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}&`


export const FETCH_WEATHER = "FETCH_WEATHER";
// EXPORT TO SEARCHBAR CONTAINER
export function fetchWeather (city){
    const url = `${ROOT_URL}q=${city}`
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}