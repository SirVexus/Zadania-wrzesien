"use strict";
exports.__esModule = true;
var app_1 = require("./app");
require("./main.scss");
var inputCity = document.createElement("input");
inputCity.id = "inputField";
inputCity.innerText = "";
var submitButton = document.createElement("button");
submitButton.id = "submitButton";
submitButton.innerHTML = "Add";
var searchDiv = document.querySelector("#city");
var resultDiv = document.querySelector("#result");
searchDiv.appendChild(inputCity);
searchDiv.appendChild(submitButton);
submitButton.addEventListener('click', function () {
    var cityName = app.getCityName();
    if (app.cityArray.includes(cityName) || app.getCities().includes(cityName)) {
        return;
    }
    else {
        app.getCityInfo(cityName).then(function (data) {
            resultDiv.appendChild(app.createWeatherDiv(data, cityName));
        });
        app.saveCityArray(cityName);
    }
});
window.addEventListener('beforeunload', function () {
    app.saveCitiesToLocalStorage(app.cityArray);
});
window.addEventListener('load', function () {
    var cities = app.getCities();
    if (cities) {
        cities.forEach(function (city, countCity) {
            app.getCityInfo(city).then(function (data) {
                resultDiv.appendChild(app.createWeatherDiv(data, cities[countCity]));
            });
        });
    }
});
var app = new app_1.App();
