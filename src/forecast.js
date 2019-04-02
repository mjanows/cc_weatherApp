import Weather from './weather.js'
import Measurment from './measurement.js'

const apiKey = 'ae6be9da7ef50b05b98fc3ddafcb32b9';

class Forecast {
    constructor() {
        this.cityId;
        this.cityName;
        this.country;

        this.weathers; //tablica obiektów klasy Weather
    }

    async getCurrentMeasurementByCityName(name) {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&&units=metric&&appid=${apiKey}`;
        let result = await fetch(url);
        return result.json();
    }

    async getForecastByCityName(name) {
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&&units=metric&&appid=${apiKey}`;
        let result = await fetch(url);
        return result.json();
    }

    //TODO
    //async getCurrentMeasurementByCoords(name)
    //async getForecastByCoords(name)
}

export default Forecast