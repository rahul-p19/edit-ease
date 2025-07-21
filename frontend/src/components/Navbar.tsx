import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex items-center justify-between w-full py-6 px-8 sm:px-14'>
      <Link to={"/"} className='text-4xl font-medium'>EditEase</Link>
      <Link to={"/events"} className='text-xl border-b border-b-transparent hover:border-b-ink transition-colors duration-150'>Events</Link>
    </nav>
  )
}

export default Navbar