import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import Forecast from "./Forecast";

export default function Search() {
    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState(null);
    const [lastFetched, setLastFetched] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [wind, setWind] = useState(null);
    const [pressure, setPressure] = useState(null);
    const [description, setDescription] = useState(null);
    const [unit, setUnit] = useState("Celsius");
    const [coordinates, setCoordinates] = useState(null);
    const [searchedCityCoordinates, setSearchedCityCoordinates] = useState(null);

    function searchCity(cityName) {
        const apiKey = "b6f13b15bc39c8fd600adbc9db22e8c9";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then((response) => {
            setTemperature(response.data.main.temp);
            setCity(response.data.name);
            setLastFetched(new Date());
            setHumidity(response.data.main.humidity);
            setWind(response.data.wind.speed);
            setPressure(response.data.main.pressure);
            setDescription(response.data.weather[0].main);
            setCoordinates({
                lat: response.data.coord.lat,
                lon: response.data.coord.lon
            });
            setSearchedCityCoordinates({
                lat: response.data.coord.lat,
                lon: response.data.coord.lon
            });
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        const cityName = document.querySelector("#search-city").value;
        searchCity(cityName);
    }

    function getWeatherIcon(description) {
        switch (description) {
            case "Clear":
                return "CLEAR_DAY";
            case "Clouds":
                return "CLOUDY";
            case "Rain":
                return "RAIN";
            default:
                return "PARTLY_CLOUDY_DAY";
        }
    }

    function getCurrentLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = "b6f13b15bc39c8fd600adbc9db22e8c9";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then((response) => {
                setTemperature(response.data.main.temp);
                setCity(response.data.name);
                setLastFetched(new Date());
                setHumidity(response.data.main.humidity);
                setWind(response.data.wind.speed);
                setPressure(response.data.main.pressure);
                setDescription(response.data.weather[0].main);
                setCoordinates({
                    lat: response.data.coord.lat,
                    lon: response.data.coord.lon
                });
            });
        });
    }

    function showFahrenheit(event) {
        event.preventDefault();
        if (unit !== "Fahrenheit") {
            setTemperature(Math.round((temperature * 9) / 5 + 32));
            setUnit("Fahrenheit");
        }
    }

    function showCelsius(event) {
        event.preventDefault();
        if (unit !== "Celsius") {
            setTemperature(Math.round(((temperature - 32) * 5) / 9));
            setUnit("Celsius");
        }
    }

    function formatLastFetchedDate(date) {
        const options = { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric" };
        return date.toLocaleString(undefined, options).replace(/:\d{2}$/, "");
    }

    useEffect(() => {
        getCurrentLocation();
    }, []);

    return (
        <div>
            <form id="search" onSubmit={handleSubmit}>
                <div>
                    <input
                        type="search"
                        name="city"
                        id="search-city"
                        required
                        placeholder="Enter a city..."
                        autoFocus="on"
                    />
                </div>
                <div>
                    <button type="submit" className="btn btn-info">
                        Search
                    </button>
                </div>
            </form>
            <button className="currentLocation" onClick={getCurrentLocation}>
                Current Location
            </button>
            <h1>
                {city ? ` ${city}` : "Search for a city..."}{" "}
                <ReactAnimatedWeather
                    icon={[getWeatherIcon(description)]}
                    color="black"
                    size={50}
                    animate={true}
                />
            </h1>
            <h2 className="date">
                Last fetched: {lastFetched ? formatLastFetchedDate(lastFetched) : "Unknown"}
            </h2>
            <div className="row row-cols-2 row-cols-md-1">
                <div className="current-temp">
                    <p>
                        <div>
                            {" "}
                            <span className="description">{description},</span> {""}
                            <span className="temp">
                                {temperature ? Math.round(temperature) : "Thinking..."}
                            </span>
                            <span className="unit">
                                {" "}
                                <a href="/" onClick={showCelsius}>
                                    °C{" "}
                                </a>{" "}
                                |{" "}
                                <a href="/" className="unit" onClick={showFahrenheit}>
                                    {" "}
                                    °F{" "}
                                </a>{" "}
                            </span>
                        </div>
                    </p>
                </div>
            </div>
            <div className="weatherinfo">
                <p>
                    {""}{" "}
                    <span className="humidity">
                        {" "}
                        <ReactAnimatedWeather
                            icon="FOG"
                            color="black"
                            size={20}
                            animate={true}
                        />
                        {""} {humidity}% ~{" "}
                    </span>{" "}
                    {""}
                    {""}{" "}
                    <span className="wind">
                        <ReactAnimatedWeather
                            icon="WIND"
                            color="black"
                            size={20}
                            animate={true}
                        />
                        {""} {wind}
                        {""} km/h ~{" "}
                    </span>
                    {""}
                    {""}{" "}
                    <span className="pressure">
                        <ReactAnimatedWeather
                            icon="FOG"
                            color="black"
                            size={20}
                            animate={true}
                        />
                        {""} {pressure}Pa
                    </span>
                    {""}
                </p>
            </div>
            {coordinates && (
                <Forecast
                    coordinates={coordinates}
                    searchedCityCoordinates={searchedCityCoordinates}
                />
            )}
        </div>
    );
}