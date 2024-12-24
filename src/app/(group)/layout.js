import React from 'react'
import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Hero />
    </div>
  )
}

export default layout
