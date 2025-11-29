import { current } from "@reduxjs/toolkit";
import { receiveWeatherError, receiveWeatherResponse } from "./weatherAction";
import {
    SEND_WEATHER_REQUEST,
    RECEIVE_WEATHER_ERROR,
    RECEIVE_WEATHER_RESPONSE,
    SEND_FORECAST_REQUEST,
    RECEIVE_FORECAST_RESPONSE,
    RECEIVE_FORECAST_ERROR,
} from "./weatherTypes";

const init = {
    current: {
        loading: false,
        data: {},
        error: "",
    },
    forecast: {
        loading: false,
        data: {},
        error: "",
    },
};

const weatherReducer = (state = init, action) => {
    switch (action.type) {
        case SEND_WEATHER_REQUEST:
            return { ...state, current:{...state.current ,loading: true }};
        case RECEIVE_WEATHER_RESPONSE:
            return { ...state, current:{...state.current ,loading: false, data: action.payload, error: ""} };
        case RECEIVE_WEATHER_ERROR:
            return { ...state, current:{...state.current ,loading: false, data: {}, error: action.payload }};
        // forecast
        case SEND_FORECAST_REQUEST:
            return {...state ,forecast:{...state.forecast, loading:true}}
        case RECEIVE_FORECAST_RESPONSE:
            return{...state,forecast:{...state.forecast, loading: false, data: action.payload, error:""}};
        case RECEIVE_FORECAST_ERROR:
            return {...state, forecast:{...state.forecast, loading:false, data:{}, error:action.payload}}

        default :
            return state;
    }
};

export default weatherReducer;
