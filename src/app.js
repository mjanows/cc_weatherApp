import Weather from './weather.js'
import Measurement from './measurement.js'
import { createPublicKey } from 'crypto';

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

        //tablica z datami
        const days = new Array();
        days.push(new Date(measurements[0].date.getFullYear(), 
                            measurements[0].date.getMonth(),
                            measurements[0].date.getDate()));

        for (let i = 0; i < 4; i++) {
            let d = new Date(days[i].getTime() + (1 * 24 * 3600 * 1000));
            days.push(d);
        }

        //tablica obiektów klasy Weather       
        const weatherFor5Days = new Array(5);

        for (let d of days) {
            let ms = measurements.filter(m => {
                return m.date.getFullYear() === d.getFullYear()
                    && m.date.getMonth() === d.getMonth()
                    && m.date.getDate() === d.getDate()
            }); 
            let w = new Weather();
            w.set(d, ms);
            weatherFor5Days.push(w);
        }

        console.log(weatherFor5Days);
    }
}

export default App