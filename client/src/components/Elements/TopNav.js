import React from 'react'
import { Link } from 'react-router-dom'


export default function TopNav() {
  return (
   <div className='flex justify-between bg-stone-600'>
   <Link className='text-red-400 text-lg p-5 ' to="/">Home</Link>
   <Link className='text-red-400 text-lg p-5 ' to="/register">Register</Link>
   <Link className='text-red-400 text-lg p-5 ' to="/login">Login</Link>
  
   </div>
  )
}
