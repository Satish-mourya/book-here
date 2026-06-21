import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import {useNavigate} from "react-router-dom"

const Navbar = () => {
    const {aToken,setAToken}=useContext(AdminContext)
    const navigate=useNavigate()
    const logout=()=>{
         navigate('/')
        aToken&&localStorage.removeItem('aToken')
        aToken&&setAToken('')
    }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white border-gray-400'>
      <div className='flex items-center gap-2 '>
         <h1 className=' cursor-pointer text-lg'>Booke-here</h1>
         <p className='border px-2.5 rounded-full border-gray-500 text-gray-500'>{aToken?'Admin':'Doctor'}</p>
         
      </div>
      <button onClick={logout} className='bg-blue-500 text-sm py-2 px-10 rounded-full text-white'>Logout</button>
    </div>
  )
}

export default Navbar
