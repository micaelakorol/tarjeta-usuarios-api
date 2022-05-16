import React from 'react'
import { Outlet } from 'react-router-dom'
import Buscador from './componentes/Buscador'



const App = () => {
  return (
    <>
    <Buscador />
    <div className='outlet'>
    <Outlet />
    </div></>
  )
}

export default App