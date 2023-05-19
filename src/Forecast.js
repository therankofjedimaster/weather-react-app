import React from "react";
import "./index.css";
import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
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
                                {" "}
                                <ReactAnimatedWeather
                                    icon="CLOUDY"
                                    color="lightslategray"
                                    size={30}
                                    animate={true}
                                />
                            </div>
                            <div className="col">
                                {" "}
                                <ReactAnimatedWeather
                                    icon="CLOUDY"
                                    color="lightslategray"
                                    size={30}
                                    animate={true}
                                />
                            </div>
                            <div className="col">
                                {" "}
                                <ReactAnimatedWeather
                                    icon="CLOUDY"
                                    color="lightslategray"
                                    size={30}
                                    animate={true}
                                />
                            </div>
                            <div className="col">
                                {" "}
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
                        <div className="col">
                            <span className="maxTemp"></span>
                            <span className="minTemp"></span>
                        </div>
                        <div className="col">
                            <span className="maxTemp"></span>
                            <span className="minTemp"></span>
                        </div>
                        <div className="col">
                            <span className="maxTemp"></span>
                            <span className="minTemp"></span>
                        </div>
                        <div className="col">
                            <span className="maxTemp"></span>
                            <span className="minTemp"></span>
                        </div>
                        <div className="col">
                            <span className="maxTemp"></span>
                            <span className="minTemp"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
