import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({ data }) => {
    const { temperature, state, humidity, wind } = data;
    return(
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={ temperature } state={ state } />
        <WeatherExtraInfo humidity={ humidity } wind={ wind }/>
    </div>);
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}
export default WeatherData;