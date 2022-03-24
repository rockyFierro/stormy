import React from 'react'
import moment from 'moment'
import { Card } from 'semantic-ui-react'

export const WeatherDataCard = ({ weatherData }) => {
    return (
        <Card>
            <Card.Content>
                <Card.Header className="header">{weatherData.name}</Card.Header>
                <span className="day">{moment().format('dddd')} </span>
                <span className="date">{moment().format('LL')}</span>
                <p>{weatherData.weather[0].description}</p>
                <p>Temprature: {weatherData.main.temp}</p>
                <p>Feels like: {weatherData.main.feels_like}</p>
                <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </Card.Content>
        </Card>
    )
}
