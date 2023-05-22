import React, { useState, useEffect } from "react";
import "./index.css";
import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function Forecast({ searchedCityCoordinates }) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        if (searchedCityCoordinates) {
            getForecast(searchedCityCoordinates);
        } else {
            navigator.geolocation.getCurrentPosition((position) => {
                const currentLocationCoordinates = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };
                getForecast(currentLocationCoordinates);
            });
        }
    }, [searchedCityCoordinates]);

    function getForecast(coordinates) {
        const lat = coordinates.lat;
        const lon = coordinates.lon;
        const apiKey = "b6f13b15bc39c8fd600adbc9db22e8c9";
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(forecastUrl).then((response) => {
            setForecast(response.data.list.slice(0, 5));
        });
    }


    return (
        <div>
            <div className="forecast">
                <div className="days">
                    <div className="row row-cols-5">
                        <div className="col">Mon</div>
                        <div className="col">Tue</div>
                        <div className="col">Wed</div>
                        <div className="col">Thu</div>
                        <div className="col">Fri</div>
                    </div>
                </div>
                <div className="weather-symbols">
                    <div className="row row-cols-5">
                        <div className="col">
                            <ReactAnimatedWeather
                                icon="CLOUDY"
                                color="lightslategray"
                                size={30}
                                animate={true}
                            />
                        </div>
                        <div className="col">
                            <ReactAnimatedWeather
                                icon="CLOUDY"
                                color="lightslategray"
                                size={30}
                                animate={true}
                            />
                        </div>
                        <div className="col">
                            <ReactAnimatedWeather
                                icon="CLOUDY"
                                color="lightslategray"
                                size={30}
                                animate={true}
                            />
                        </div>
                        <div className="col">
                            <ReactAnimatedWeather
                                icon="CLOUDY"
                                color="lightslategray"
                                size={30}
                                animate={true}
                            />
                        </div>
                        <div className="col">
                            <ReactAnimatedWeather
                                icon="CLOUDY"
                                color="lightslategray"
                                size={30}
                                animate={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="temp-days">
                <div className="row row-cols-5">
                    {forecast.map((dayTime, index) => (
                        <div className="col" key={index}>
                            <span className="maxTemp">{Math.round(dayTime.main.temp_max)}°/</span>
                            <span className="minTemp">{Math.round(dayTime.main.temp_min)}°</span>
                        </div>
                    ))}
                </div>
                <p><em>The 5-day forecast is in Celsius!</em></p> </div>

        </div>
    );
}
