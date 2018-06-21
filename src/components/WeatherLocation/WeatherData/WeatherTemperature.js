import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY} from '../../../constants/weather';
import './styles.css';

const stateToIconName = (state) => {
    switch (state) {
        case CLOUD:
            return 'cloud';
        case CLOUDY:
            return 'cloudy';
        case SUN:
            return 'day-sunny';
        case RAIN:
            return 'rain';
        case SNOW:
            return 'snow';
        case WINDY:
            return 'windy';
        default:
            return 'day-sunny';
    }
};

const getWeatherIcon = (state) => {
    return (<WeatherIcons className='wicon' name={ stateToIconName(state) } size="4x" />);
};

const WeatherTemperature = ({ temperature, state }) => {
    return(
        <div className='weatherTemperatureCont'>
            {getWeatherIcon(state)}
            <span className='temperature'>{`${temperature}`}</span>
            <span className='degrees'>ºC</span>
        </div>
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.string.isRequired,
    state: PropTypes.string
}
export default WeatherTemperature;