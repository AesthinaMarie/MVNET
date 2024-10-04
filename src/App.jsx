import React, { useState,useEffect} from 'react'
import HomePage from './pages/homepage'
import LoginPage from './pages/loginpage'
import SuperAdmin from './pages/sadminpage'
import {Routes,Route} from 'react-router-dom'

const App = () => {

  return (
    <>
   
      <Routes>
        <Route index path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/superAdmin' element={<SuperAdmin/>}></Route>
      </Routes>
    </>
  )
}

export default App
