import Weather from './weather.js'
import Measurement from './measurement.js'

const apiKey = 'ae6be9da7ef50b05b98fc3ddafcb32b9';

class App {
    constructor() {
        this.cityId;
        this.cityName;
        this.country;

        this.weathers; //tablica obiektów klasy Weather
    }

    async getCurrentByCityName(name) {
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
    //async getCurrentByCoords(name)
    //async getForecastByCoords(name)

    setData(current, forecast) {
        this.cityId = current.id;
        this.cityName = current.name;
        this.country = current.sys.country;

        //tablica obiektów klasy Measurement
        const measurements = new Array();

        let m = new Measurement();
        m.set(current);
        measurements.push(m);

        for (let data of forecast.list) {
            m = new Measurement();
            m.set(data);
            measurements.push(m);
        }

       console.log(measurements)

       //TODO
       //tablica obiektów klasy Weather
       
    }
}

export default App