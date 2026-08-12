
import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'

const MainLayout = () => {

  return (
  <div className=' relative  min-h-screen min-w-screen'>
  <Navbar /> 
  <Outlet /> 
  </div>

)
}

export default MainLayout