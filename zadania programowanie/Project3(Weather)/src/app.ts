import { IWeatherData, IWeather } from './interface';

export class App {
    opwApiKey = 'cee0399a2098bebcbc13c9ef29cbbf7d';
    cityArray: string[] = [];
    counter: number = 0;

    constructor() {
        
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        this.saveData(weather);
        return weather;
    }

    async getWeather(city: string): Promise<IWeatherData> {
            const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${this.opwApiKey}`;
            const weatherResponse = await fetch(openWeatherUrl);
            if (weatherResponse.status === 404) {
                console.log('Nieprawidłowe miasto');
            }
            const weatherData = await weatherResponse.json();
            return weatherData;

    }

    saveData(data: any) {
        localStorage.setItem('weather', JSON.stringify(data));
    }
    
    getData() {
        const data = localStorage.getItem('weather');
        if (data) {
            return JSON.parse(data);
        } 
        else 
        {
            return {};
        }
    }
    
    saveCitiesToLocalStorage(cities: string[]){
        if(cities == []){
            return;
        }else{
            let cityData: string[] = this.getCities();
            if(cityData){
                cityData.forEach(element => {
                    cities.push(element);
                });
            }
            localStorage.setItem('cityData', JSON.stringify(cities));
        }
    }

    getCities(){
        const cityData = localStorage.getItem('cityData');
        if (cityData) {
            return JSON.parse(cityData);
        } 
        else 
        {
            return;
        }
    }

    saveCityArray(str: string){
        
        if(this.cityArray.includes(str)){
            return;
        }else{
            this.cityArray.push(str);
        }
    }

    getCityName(){
        var str = (<HTMLInputElement>document.getElementById("inputField")).value;
        return str;
    }

    createWeatherDiv(weather: IWeatherData,cityName: string){

        let weatherDiv: HTMLDivElement = document.createElement("div");
        weatherDiv.id = "watherDiv" + this.counter;
        weatherDiv.className = "weatherDiv";

        let weatherCityName: HTMLDivElement = document.createElement("div"); //City name
        weatherCityName.className = "weatherCityName";
        weatherCityName.innerHTML = cityName;
        weatherCityName.id= "weatherCityNameID" + this.counter;

        let weatherSkyStatus: HTMLDivElement = document.createElement("div"); //Sky status
        weatherSkyStatus.className = "weatherSkyStatus";
        weatherSkyStatus.innerHTML = weather.weather[0].main;

        let tempAndHumidityDiv: HTMLDivElement = document.createElement("div"); //Lower-container
        tempAndHumidityDiv.className = "tempAndHumidityDiv";

        let tempDiv: HTMLDivElement = document.createElement("div"); //Temp
        tempDiv.className = "tempDiv";
        tempDiv.innerHTML = weather.main.temp + "°C"
        tempDiv.style.backgroundImage = `url(http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png)`;
        tempDiv.style.backgroundRepeat = "no-repeat";
        tempDiv.style.backgroundSize = "auto";

        let humidityPressureDiv: HTMLDivElement = document.createElement("div"); //Lower-Right Container
        humidityPressureDiv.className = "humidityPressureDiv";

        let pressureDiv: HTMLDivElement = document.createElement("div"); //Pressure
        pressureDiv.className = "pressureDiv";
        pressureDiv.innerHTML = "<p>Pressure: <p><br>" + weather.main.pressure.toString();

        let humidityDiv: HTMLDivElement = document.createElement("div"); //Humidity
        humidityDiv.className = "humidityDiv";
        humidityDiv.innerHTML = "<p>Humidity: <p><br>" + weather.main.humidity.toString() + "%";

        weatherDiv.appendChild(weatherCityName);
        weatherDiv.appendChild(weatherSkyStatus);
        weatherDiv.appendChild(tempAndHumidityDiv);
        tempAndHumidityDiv.appendChild(tempDiv);
        tempAndHumidityDiv.appendChild(humidityPressureDiv);
        humidityPressureDiv.appendChild(pressureDiv);
        humidityPressureDiv.appendChild(humidityDiv);

        this.counter++;
        return weatherDiv;
    }
}
  
