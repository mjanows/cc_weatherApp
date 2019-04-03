import Measurment from './measurement.js'

class Weather {
    constructor() {
        this.date;

        this.maxtemp;
        this.minTemp;
        this.weatherId; //id z największą ilością wystąpień
        this.weatherDescription;

        //średnie pomiarów
        this.humidity;
        this.windSpeed;
        this.clouds;
        this.pressure;

        this.measurements; //tablica obiektów klasy Measurement
    }

    set(day, measurements) {
        this.date = day;

        let temp = new Array();
        measurements.forEach(e => temp.push(e.temp));
        this.maxtemp = Math.max(...temp);
        this.minTemp = Math.min(...temp);

        //weatherId z największą ilością wystąpień
        let obj = measurements.reduce((prev, curr) => {
            let i = prev.id.indexOf(curr.weatherId);
            if (i == -1) {
                prev.id.push(curr.weatherId);
                prev.desc.push(curr.weatherDescription);
                prev.value.push(1);
            }
            else {
                prev.value[i] += 1;
            }
            return prev;
        }, { id: [], desc: [], value: []})
       
        let index = obj.value.indexOf(Math.max(...obj.value));
        this.weatherId = obj.id[index];
        this.weatherDescription = obj.desc[index];

        //średnie pomiarów
        this.humidity = (measurements.reduce((total, curr) => {
                            return total + curr.humidity;
                        }, 0) / measurements.length).toFixed(2);
        this.windSpeed = (measurements.reduce((total, curr) => {
                            return total + curr.windSpeed
                        }, 0) / measurements.length).toFixed(2);
        this.clouds = (measurements.reduce((total, curr) => {
                            return total + curr.clouds
                        }, 0) / measurements.length).toFixed(2);
        this.pressure = (measurements.reduce((total, curr) => {
                            return total + curr.pressure
                        }, 0) / measurements.length).toFixed(2);

        this.measurements = measurements;
    }
}

export default Weather