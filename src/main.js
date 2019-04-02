import "@babel/polyfill";
import Forecast from "./forecast.js";

console.log('it run');

const forecast = new Forecast();

forecast.getCurrentMeasurementByCityName('Wroclaw').then(data => console.log(data));
forecast.getForecastByCityName('Wroclaw').then(data => console.log(data));