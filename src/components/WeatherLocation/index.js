import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather';

import './styles.css';
import { CircularProgress } from 'material-ui';

const apiKey = 'f99bbd9e4959b513e9bd0d7f7356b38d';
const url = "http://api.openweathermap.org/data/2.5/weather";

class WeatherLocation extends Component {

    constructor({ city }) {
        super();
        this.state = {
            city,
            data: null
        };
        console.log("LHC::constructor");
    }

    handleUpdateClick = () => {
        const { city } = this.state;
        const apiWeather = `${url}?q=${city}&appid=${apiKey}`;

        fetch(apiWeather).then((req) => {
            console.log(req);
            return req.json();
        }).then((res) => {
            const data = transformWeather(res);
            this.setState({ data });
        });
    }
    
    componentWillMount() {
        console.log("LHC::componentWillMount");
        this.handleUpdateClick();
    }

    componentDidMount() {
        console.log("LHC::componentDidMount");
    }

    componentWillUpdate() {
        console.log("LHC::componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("LHC::componentDidUpdate");
    }
    
    render = () => {
        console.log("LHC::render");
        const { city, data } = this.state;

        return(
            <div className='weatherLocationCont'>
                <Location city={ city } />
                {data ? <WeatherData data={ data } /> :
                <CircularProgress size={60} thickness={7} />}
            </div>
        );
    }
}

WeatherLocation.propTypes = {
    city: PropTypes.string,
}
export default WeatherLocation;