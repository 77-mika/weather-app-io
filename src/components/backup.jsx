import React from "react";
import TodayDate from "./TodayDate";
import { useDispatch, useSelector } from "react-redux";

export const WeatherApp = () => {
    const {loading, data, error}  = useSelector(state=>state.weather);
    const dispatch = useDispatch();    






    return (
        <div className="weather-container">
            <div className="top">
                <div className="logo">
                    <p className="logo-emoji">🌤️</p>
                    <p className="logo-name">WeatherApp</p>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search City..." />
                    <button>Search</button>
                </div>
            </div>
            <div className="mid">
                <div className="left-mid">
                    <div className="m-l-t">
                        <p className="city">New York</p>
                        <p className="calander"><TodayDate/></p>
                    </div>
                    <div className="m-l-b">
                        <div className="m-l-b-l">
                            <p className="degree">18°C</p>
                        </div>
                        <div className="m-l-b-r">
                            <p className="weather-state">Partly Cloudy</p>
                            <p className="h-i-f">Feels like 17°</p>
                        </div>
                    </div>
                </div>
                <div className="right-mid">
                    <p className="w-l">🌧️</p>
                </div>
            </div>
            <div className="bottom">
                <p>🗓️Next 5 Days</p>
                <div className="bottom-container">
                    <div className="infos">
                        <p>Sat</p>
                        <p className="info-emoji">🌩️</p>
                        <p>12°</p>
                    </div>
                    <div className="infos">
                        <p>Sun</p>
                        <p className="info-emoji">🌫️</p>
                        <p>14°</p>
                    </div>
                    <div className="infos">
                        <p>Mon</p>
                        <p className="info-emoji">☀️</p>
                        <p>25°</p>
                    </div>
                    <div className="infos">
                        <p>Tue</p>
                        <p className="info-emoji">☔</p>
                        <p>8°</p>
                    </div>
                    <div className="infos">
                        <p>Wed</p>
                        <p className="info-emoji">☁️</p>
                        <p>15°</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
