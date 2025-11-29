import axios from "axios";
import { RECEIVE_FORECAST_ERROR, RECEIVE_FORECAST_RESPONSE, RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER_RESPONSE, SEND_FORECAST_REQUEST, SEND_WEATHER_REQUEST } from "./weatherTypes";
const apikey = 'd10bd67afe38d714d6fd1d8112e62bc5'

export const sendWeatherRequest = () => {
    return {
        type: SEND_WEATHER_REQUEST,
    };
};

export const receiveWeatherResponse = (data) => {
    return {
        type: RECEIVE_WEATHER_RESPONSE,
        payload:data
    };
};


export const receiveWeatherError = (data) => {
    return {
        type: RECEIVE_WEATHER_ERROR,
        payload:data
    };
};



export const sendForecastRequest = () => {
    return {
        type: SEND_FORECAST_REQUEST,
    };
};

export const reciveForecasrResponse = (data) => {
    return {
        type: RECEIVE_FORECAST_RESPONSE,
        payload:data
    };
};


export const reciveForecastError = (data) => {
    return {
        type: RECEIVE_FORECAST_ERROR,
        payload:data
    };
};





export const getWeatherInfo = (city) => {
  return async (dispatch) => {
    dispatch(sendWeatherRequest());

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );
      dispatch(receiveWeatherResponse(res.data));
    } catch (error) {
      dispatch(receiveWeatherError(error.message));
    }
  };
};


export const  getForecastWeather = (city) =>{
    return async (dispatch) => {
        dispatch(sendForecastRequest());
        try{
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}&units=metric`
            );
            dispatch(reciveForecasrResponse(res.data));
        }catch (error){
            dispatch(reciveForecastError(error.message));
        }
    };
};