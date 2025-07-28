import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between p-8 w-4/5 border-t border-t-secondary gap-y-6 mt-4'>
      <Link to={"/"} className='text-4xl font-medium'>EditEase</Link>
      <div className='flex flex-col items-center gap-y-2 sm:gap-y-4'>
        <Link to={"/events"} className='border-b border-b-transparent hover:border-b-ink transition-colors duration-150'>Events</Link>
        <Link to={"/manage"} className='border-b border-b-transparent hover:border-b-ink transition-colors duration-150'>Leads</Link>
        <Link to={"/admin"} className='border-b border-b-transparent hover:border-b-ink transition-colors duration-150'>Admin</Link>
      </div>
    </footer>
  )
}

export default Footer