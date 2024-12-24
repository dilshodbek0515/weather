'use client'
import React from 'react'

const Weather = ({ posts, current, location }) => {
  console.log(posts)

  return (
    <section className='container mx-auto flex flex-col gap-20 items-center justify-center py-5'>
      <div className='flex flex-col items-center justify-center gap-10'>
        <div
          className='flex flex-col gap-5 items-center justify-center'
          key={current?.condition?.code}
        >
          <div className='flex items-center justify-center gap-10'>
            <img
              className='w-32 h-32 max-sm:w-20 max-sm:h-20'
              src={posts.forecast.forecastday[0].day.condition.icon}
              alt='img'
            />
            <p className='text-white text-8xl max-sm:text-4xl'>
              {current?.temp_c} °C
            </p>
          </div>

          <div className='flex items-center gap-5 justify-center'>
            <h2 className='text-white text-3xl max-sm:text-xl'>
              {location.name}
            </h2>
            <h2 className='text-white text-3xl max-sm:text-xl'>
              {location.country}
            </h2>
          </div>
          <h2 className='text-white text-2xl mt-5'>{current.condition.text}</h2>
          <h2 className='text-white text-xl mt-5 max-sm:text-lg'>
            Update as of : {location.localtime}
          </h2>
          <div className='w-[500px] flex-wrap flex items-center justify-center gap-x-10 gap-y-3 max-[430px]:flex-col'>
            <span className='text-white max-sm:text-sm'>
              Feels Like {current?.feelslike_c}
            </span>
            <span className='text-white max-sm:text-sm'>
              Wind : {current?.wind_mph} km/s
            </span>
            <span className='text-white max-sm:text-sm'>
              Visibility : {current?.wind_kph}
            </span>
            <span className='text-white max-sm:text-sm'>
              Barometer : {current?.pressure_mb} mb
            </span>
            <span className='text-white max-sm:text-sm'>
              Humidity : {current?.humidity}
            </span>
            <span className='text-white max-sm:text-sm'>
              Dew Point : {current?.dewpoint_f}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Weather
