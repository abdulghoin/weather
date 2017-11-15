import axios from 'axios'

const API_KEY = 'eb84e384a81a99751773c34d4c5c3884'
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function searchForecast(city) {
  console.log(city);
  const url = `${BASE_URL}&q=${city}`
  const request = axios.get(url)

  console.log('Request : ' + request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
