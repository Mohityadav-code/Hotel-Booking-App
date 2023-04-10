import React from 'react'
import {useSelector} from 'react-redux'
export default function Home() {
    // const stateForRedux=useSelector((state)=>state.user.role)
    const stateForRedux=useSelector((state)=>state.user.type)
    // const stateForRedux=useSelector((state)=>state)
  return (
    <div className='text-yellow-300 bg-black text-2xl p-5 text-center'>Home and this is Redux {JSON.stringify(stateForRedux)}</div>
  )
}
