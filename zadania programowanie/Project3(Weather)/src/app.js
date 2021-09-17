"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.App = void 0;
var App = /** @class */ (function () {
    function App() {
        this.opwApiKey = 'cee0399a2098bebcbc13c9ef29cbbf7d';
        this.cityArray = [];
        this.counter = 0;
    }
    App.prototype.getCityInfo = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var weather;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getWeather(city)];
                    case 1:
                        weather = _a.sent();
                        this.saveData(weather);
                        return [2 /*return*/, weather];
                }
            });
        });
    };
    App.prototype.getWeather = function (city) {
        return __awaiter(this, void 0, void 0, function () {
            var openWeatherUrl, weatherResponse, weatherData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + this.opwApiKey;
                        return [4 /*yield*/, fetch(openWeatherUrl)];
                    case 1:
                        weatherResponse = _a.sent();
                        return [4 /*yield*/, weatherResponse.json()];
                    case 2:
                        weatherData = _a.sent();
                        return [2 /*return*/, weatherData];
                }
            });
        });
    };
    App.prototype.saveData = function (data) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    };
    App.prototype.getData = function () {
        var data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        }
        else {
            return {};
        }
    };
    App.prototype.saveCitiesToLocalStorage = function (cities) {
        if (cities == []) {
            return;
        }
        else {
            var cityData = this.getCities();
            if (cityData) {
                cityData.forEach(function (element) {
                    cities.push(element);
                });
            }
            localStorage.setItem('cityData', JSON.stringify(cities));
        }
    };
    App.prototype.getCities = function () {
        var cityData = localStorage.getItem('cityData');
        if (cityData) {
            return JSON.parse(cityData);
        }
        else {
            return;
        }
    };
    App.prototype.saveCityArray = function (str) {
        if (this.cityArray.includes(str)) {
            return;
        }
        else {
            this.cityArray.push(str);
        }
    };
    App.prototype.getCityName = function () {
        var str = document.getElementById("inputField").value;
        return str;
    };
    App.prototype.createWeatherDiv = function (weather, cityName) {
        var weatherDiv = document.createElement("div");
        weatherDiv.id = "watherDiv" + this.counter;
        weatherDiv.className = "weatherDiv";
        var weatherCityName = document.createElement("div"); //City name
        weatherCityName.className = "weatherCityName";
        weatherCityName.innerHTML = cityName;
        weatherCityName.id = "weatherCityNameID" + this.counter;
        var weatherSkyStatus = document.createElement("div"); //Sky status
        weatherSkyStatus.className = "weatherSkyStatus";
        weatherSkyStatus.innerHTML = weather.weather[0].main;
        var tempAndHumidityDiv = document.createElement("div"); //Lower-container
        tempAndHumidityDiv.className = "tempAndHumidityDiv";
        var tempDiv = document.createElement("div"); //Temp
        tempDiv.className = "tempDiv";
        tempDiv.innerHTML = weather.main.temp + "°C";
        tempDiv.style.backgroundImage = "url(http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png)";
        tempDiv.style.backgroundRepeat = "no-repeat";
        tempDiv.style.backgroundSize = "auto";
        var humidityPressureDiv = document.createElement("div"); //Lower-Right Container
        humidityPressureDiv.className = "humidityPressureDiv";
        var pressureDiv = document.createElement("div"); //Pressure
        pressureDiv.className = "pressureDiv";
        pressureDiv.innerHTML = "<p>Pressure: <p><br>" + weather.main.pressure.toString();
        var humidityDiv = document.createElement("div"); //Humidity
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
    };
    return App;
}());
exports.App = App;
