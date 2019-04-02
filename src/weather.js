import Measurment from './measurement.js'

class Weather {
    constructor() {
        this.date;

        this.maxtemp;
        this.minTemp;
        this.WeatherId; //id z największą ilością wystąpień
        this.WeatherDescription;

        //średnie pomiarów godzinowych
        this.percipitation;
        this.windSpeed;
        this.clouds;
        this.pressure;

        this.measurements; //tablica obiektów klasy Measurement
    }
}

export default Weather