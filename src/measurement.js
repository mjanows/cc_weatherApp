class Measurement {
    constructor() {
        this.date;
       
        this.temp;
        this.weatherId;
        this.weatherDescription;
        
        this.humidity
        this.windSpeed;
        this.clouds;
        this.pressure;
    }

    set(data) {
        this.date = new Date(data.dt * 1000);
        this.temp = data.main.temp;
        this.weatherId = data.weather[0].id;
        this.weatherDescription = data.weather[0].description;
        this.humidity = data.main.humidity;
        this.windSpeed = data.wind.speed;
        this.clouds = data.clouds.all;
        this.pressure = data.main.pressure;
    }
    
}

export default Measurement;