import React, { useState } from 'react'

const WeatherCard = ({ weather, temperature }) => {

  const [isCelsius, setIsCelsius] = useState(true)

  const changeTemperature = () => setIsCelsius(!isCelsius)

  console.log(weather)

  return (
    <article className='card'>
      <h1 className='card__title'>Weather App</h1>
      <h2 className='card__subtitle'>{`${weather.name},${weather.sys.country}`}</h2>
      <div className='card__content'>
      <section className='card__first-section'>
        <img className='card__icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="clouds" />
      </section>
      <section className='card__second-section'>
        <h3 className='second__title'>"{weather?.weather[0].description}"</h3>
        <ul className='second__list'>
          <li className='second__item'><span className='second__span'>Wind speed: </span>  <i class='bx bx-wind'></i> {weather.wind.speed} m/s</li>
          <li className='second__item'><span className='second__span'>Clouds: </span>  <i class='bx bx-cloud' ></i> {weather.clouds.all} %</li>
          <li className='second__item'><span className='second__span'>Pressure: </span>  <i class='bx bxs-thermometer' ></i> {weather.main.pressure} hPa</li>
        </ul>
      </section>
      </div>
      <div className='card__grade'>
      <h2 className='card__temperature'>
        {isCelsius ? `${temperature.celsius} °C` : `${temperature.farenheit} °F`}
        </h2>
      <button className='card__btn' onClick={changeTemperature}>{isCelsius ? 'change to °F' : 'change to °C'}</button>
      </div>
    </article>
  )
}

export default WeatherCard