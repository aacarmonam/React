import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className='weahterExtraInfoCont'>
        <span className='extraInfoText'>{ `Humedad: ${humidity}%` }</span>
        <span className='extraInfoText'>{ `Veloc. viento: ${wind}` }</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}
export default WeatherExtraInfo;