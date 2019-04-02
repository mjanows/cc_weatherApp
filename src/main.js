import "@babel/polyfill";
import App from "./app.js";

console.log('it run');

const app = new App();

async function init() {
    let current = await app.getCurrentByCityName('Wroclaw');
    let forecast = await app.getForecastByCityName('Wroclaw');   
    console.log(current);
    console.log(forecast);

    app.setData(current, forecast);
}

init();