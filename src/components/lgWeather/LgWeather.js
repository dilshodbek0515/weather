'use client'
import React from 'react'

const LgWeather = ({ post }) => {
  console.log(post)

  return (
    <section className='w-full h-auto p-5'>
      <div className='lg_weather container mx-auto h-auto flex gap-10 overflow-auto'>
        {post?.forecast?.forecastday.map((day, index) => (
          <div
            key={index}
            className='min-w-[275px] h-auto rounded-xl bg-[#0000006f] p-5 flex flex-col gap-3 items-center justify-center'
          >
            <img className='w-20' src={day.day.condition.icon} alt='img' />
            <p className='text-white text-xl'>{day.day.condition.text}</p>
            <p className='text-gray-500 text-xl'>{day.date}</p>
            <p className='text-white text-6xl'>{day.day.avgtemp_c}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LgWeather
