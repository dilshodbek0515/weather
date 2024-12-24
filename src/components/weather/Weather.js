'use client'
import React from 'react'

const Weather = ({ current, location }) => {
  return (
    <section className='container mx-auto border-2 border-white flex flex-col gap-20 items-center justify-center py-5'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div
          className='flex flex-col gap-5 items-center justify-center'
          key={current?.condition?.code}
        >
          <div className='flex items-center gap-10'>
            <img className='w-32' src={current?.condition?.icon} alt='img' />
            <p className='text-white text-8xl'>{current?.temp_c} °C</p>
          </div>

          <div className='flex items-center gap-5 justify-center'>
            <h2 className='text-white text-3xl'>{location.name}</h2>
            <h2 className='text-white text-3xl'>{location.country}</h2>
          </div>
          <h2 className='text-white text-2xl mt-5'>{current.condition.text}</h2>
          <h2 className='text-white text-xl mt-5'>
            Update as of : {location.localtime}
          </h2>
          <div className='w-[500px] flex-wrap flex items-center justify-center gap-x-10 gap-y-3'>
            <span className='text-white '>
              Feels Like {current?.feelslike_c}
            </span>
            <span className='text-white '>Wind : {current?.wind_mph} km/s</span>
            <span className='text-white '>
              Visibility : {current?.wind_kph}
            </span>
            <span className='text-white '>
              Barometer : {current?.pressure_mb} mb
            </span>
            <span className='text-white '>Humidity : {current?.humidity}</span>
            <span className='text-white '>
              Dew Point : {current?.dewpoint_f}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather
