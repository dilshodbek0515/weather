import React from 'react'
import Weather from '../weather/Weather'
import LgWeather from '../lgWeather/LgWeather'

const Hero = async () => {
  // Weather
  const res = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=cdd31fd04b3a4aac934203612242312&q=toshkent&aqi=yes'
  )
  const posts = await res.json()
  const current = posts?.current
  const location = posts?.location

  // LgWeather
  const data = await fetch(
    'https://api.weatherapi.com/v1/forecast.json?key=cdd31fd04b3a4aac934203612242312&q=toshkent&days=10&aqi=yes&alerts=yes'
  )
  const post = await data.json()

  return (
    <main className='w-full h-auto mt-24 p-5 flex flex-col gap-20'>
      <Weather current={current} location={location} />
      <LgWeather post={post} />
    </main>
  )
}

export default Hero
