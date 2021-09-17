import { App } from './app';
import './main.scss';

let inputCity: HTMLInputElement = document.createElement("input");
inputCity.id ="inputField";
inputCity.innerText=""

let submitButton: HTMLButtonElement = document.createElement("button");
submitButton.id = "submitButton";
submitButton.innerHTML = "Add";

const searchDiv: HTMLDivElement = document.querySelector("#city");
const resultDiv: HTMLDivElement = document.querySelector("#result");

searchDiv.appendChild(inputCity);
searchDiv.appendChild(submitButton);

submitButton.addEventListener('click', () => {
    let cityName = app.getCityName();
    
    if(app.cityArray.includes(cityName) || app.getCities().includes(cityName)){
        return;
    }else{
        app.getCityInfo(cityName).then(data => {
            resultDiv.appendChild(app.createWeatherDiv(data, cityName));

        })
        app.saveCityArray(cityName);
    }
});

window.addEventListener('beforeunload', function() {
    app.saveCitiesToLocalStorage(app.cityArray);
});

window.addEventListener('load', () => {
    let cities: string[] = app.getCities();
    if(cities){
        cities.forEach((city, countCity) => {
            app.getCityInfo(city).then(data => {
                resultDiv.appendChild(app.createWeatherDiv(data,cities[countCity]));
            })
        });
    }
});

const app = new App();
