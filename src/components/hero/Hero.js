import React from 'react'
import Weather from '../weather/Weather'
import LgWeather from '../lgWeather/LgWeather'

const Hero = async () => {
  const URL =
    'https://api.weatherapi.com/v1/forecast.json?key=cdd31fd04b3a4aac934203612242312&q=toshkent&days=10&aqi=yes&alerts=yes'
  // Weather
  const res = await fetch(URL)
  const posts = await res.json()
  const current = posts?.current
  const location = posts?.location

  // LgWeather
  const data = await fetch(URL)
  const post = await data.json()

  return (
    <main className='w-full h-[900px] mt-20 p-5 flex flex-col gap-20 overflow-y-auto max-sm:p-3'>
      <Weather posts={posts} current={current} location={location} />
      <LgWeather post={post} />
    </main>
  )
}

export default Hero
