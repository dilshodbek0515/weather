import Link from 'next/link'
import React from 'react'
import { LuRefreshCcw } from 'react-icons/lu'
import { MdStarBorder } from 'react-icons/md'
import { VscPinned } from 'react-icons/vsc'
import { LuSun } from 'react-icons/lu'
import { HiDotsVertical } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
const Header = () => {
  return (
    <header className='w-full h-auto bg-[#000000CC] p-5 fixed top-0 left-0'>
      <div className='container mx-auto flex items-center justify-between gap-5'>
        <Link className='text-5xl text-white text-nowrap' href={'/'}>
          Weather
        </Link>
        <div className='w-auto h-auto flex items-center justify-center gap-10'>
          <nav className='flex items-center justify-center gap-10 text-white text-3xl'>
            <LuRefreshCcw className='cursor-pointer max-lg:hidden' />
            <MdStarBorder className='cursor-pointer max-lg:hidden' />
            <VscPinned className='cursor-pointer max-lg:hidden' />
            <LuSun className='cursor-pointer max-lg:hidden' />
            <HiDotsVertical className='cursor-pointer hidden max-lg:block' />
          </nav>
          <form className='w-96 h-12 bg-transparent border-2 flex gap-5 items-center justify-between px-5 rounded-lg max-lg:w-auto max-md:w-52 max-sm:hidden'>
            <input
              className='bg-transparent w-full h-full text-white text-xl outline-none'
              type='text'
              placeholder='Search'
            />
            <button className='text-2xl text-white'>
              <IoSearch />
            </button>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header
