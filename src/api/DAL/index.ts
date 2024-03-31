import {API_KEY} from '../../constants';
import {NotFound, WeatherResponse} from '../../types';

export const DAL = {
  baseURL: `https://api.openweathermap.org/data/2.5`,
  GET: async function (endpoint: string, cityName: string) {
    const requestUrl = `${endpoint}?q=${cityName}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(this.baseURL + requestUrl);
      const result: Promise<WeatherResponse> = await response.json();
      return result;
    } catch (error) {
      console.log('Error(GET): ', error);
    }
  },
};