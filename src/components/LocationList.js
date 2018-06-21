import React from 'react';
import WeatherLocation from '../components/WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Madrid,es'} />
        <WeatherLocation city={'A Coruña,es'} />
        <WeatherLocation city={'León,es'} />
    </div>
);

export default LocationList;