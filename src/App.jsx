import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import LayoutDefault from './layouts/default/default'

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<LayoutDefault/>}>
        <Route index path="/" element={<HomePage/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
