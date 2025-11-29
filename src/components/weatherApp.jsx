import React, { useState, useEffect } from "react";
import TodayDate from "./TodayDate";
import { useDispatch, useSelector } from "react-redux";
import {
    getForecastWeather,
    getWeatherInfo,
} from "../redux/weather/weatherAction";

export const WeatherApp = () => {
    const { current, forecast } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    const [query, setQuery] = useState();

    useEffect(()=>{
        dispatch(getWeatherInfo("tehran"));
        dispatch(getForecastWeather("tehran"));
    },[])

    function getEmoji(weatherMain) {
        switch (weatherMain) {
            case "Clear":
                return "☀️";
            case "Clouds":
                return "☁️";
            case "Rain":
                return "☔";
            case "Thunderstorm":
                return "🌩️";
            case "Snow":
                return "❄️";
            case "Mist":
                return "🌧️";
            case "Fog":
                return "🌫️";
            default:
                return "❓";
        }
    }

    const handleGetWeather = (e) => {
        e.preventDefault();
        dispatch(getWeatherInfo(query));
        dispatch(getForecastWeather(query));

        setQuery("");
    };

    const dailyForecasts = [];
    const datesSeen = new Set();

    if (forecast.data && forecast.data.list) {
        for (const item of forecast.data.list) {
            const date = item.dt_txt.slice(0, 10);
            if (!datesSeen.has(date)) {
                datesSeen.add(date);
                dailyForecasts.push(item);
            }
            if (dailyForecasts.length === 5) break;
        }
    }

    const dailyWithWeekday = dailyForecasts.map((item) => {
        const date = new Date(item.dt_txt);
        const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
        return {
            ...item,
            weekday,
        };
    });

    return (
        <div className="weather-container">
            <div className="top">
                <div className="logo">
                    <p className="logo-emoji">🌤️</p>
                    <p className="logo-name">WeatherApp</p>
                </div>
                <div className="search">
                    <form action="" onSubmit={handleGetWeather}>
                        <input
                            type="text"
                            placeholder="Search City..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button>Search</button>
                    </form>
                </div>
            </div>
            {current.loading ? (
                <>
                    <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="bottom">
                        <p>🗓️Next 5 Days</p>
                        <div className="bottom-container">
                            <div className="infos">
                                <div className="loading-nobc">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="infos">
                                <div className="loading-nobc">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="infos">
                                <div className="loading-nobc">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="infos">
                                <div className="loading-nobc">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="infos">
                                <div className="loading-nobc">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : current.data.main ? (
                <>
                    <div className="mid">
                        <div className="left-mid">
                            <div className="m-l-t">
                                <p className="city">{current.data.name}</p>
                                <p className="calander">
                                    <TodayDate />
                                </p>
                            </div>
                            <div className="m-l-b">
                                <div className="m-l-b-l">
                                    <p className="degree">
                                        {Math.round(current.data.main.temp)}°
                                    </p>
                                </div>
                                <div className="m-l-b-r">
                                    <p className="weather-state">
                                        {current.data.weather[0].main}
                                    </p>
                                    <p className="h-i-f">
                                        Feels like{" "}
                                        {Math.round(
                                            current.data.main.feels_like
                                        )}
                                        °
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="right-mid">
                            <p className="w-l">
                                {getEmoji(current.data.weather[0].main)}
                            </p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>🗓️Next 5 Days</p>
                        <div className="bottom-container">
                            {dailyWithWeekday.map((day) => (
                                <div className="infos" key={day.dt}>
                                    <p>{day.weekday}</p>
                                    <p className="info-emoji">
                                        {getEmoji(day.weather[0].main)}
                                    </p>
                                    <p>{Math.round(day.main.temp)}°</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : current.error ? (
                <>
                    <div className="mid">
                        <div className="left-mid">
                            <div className="m-l-t">
                                <p className="city">Something went wrong</p>
                                <p className="calander"></p>
                            </div>
                            <div className="m-l-b">
                                <div className="m-l-b-l">
                                    <p className="degree"></p>
                                </div>
                                <div className="m-l-b-r">
                                    <p className="weather-state"></p>
                                    <p className="h-i-f"></p>
                                </div>
                            </div>
                        </div>
                        <div className="right-mid">
                            <p className="w-l">❗</p>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>🗓️Next 5 Days</p>
                        <div className="bottom-container">
                            <div className="infos">
                                <p className="info-emoji"></p>
                            </div>
                            <div className="infos">
                                <p className="info-emoji"></p>
                            </div>
                            <div className="infos">
                                <p className="info-emoji"></p>
                            </div>
                            <div className="infos">
                                <p className="info-emoji"></p>
                            </div>
                            <div className="infos">
                                <p className="info-emoji"></p>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};
