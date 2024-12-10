import React from 'react'

import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        
        <img className='w-[50px]' src="https://t4.ftcdn.net/jpg/04/64/96/91/360_F_464969171_EhrkPWQOrARbuyIHL8Na6H6OzJkYZwwQ.jpg"/>
        
        <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>
        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>WatchList</Link>

    </div>
  )
}
