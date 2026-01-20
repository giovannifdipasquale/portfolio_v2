import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/SideBar/SideBar'
import './App.css'

function App() {

  return (
    <div className="h-screen w-screen p-3">
      <div className="border-1 border-solid h-full w-full bg-blue-100">
        <h1 className='font-geologica text-5xl m-8'> Giovanni Di Pasquale </h1>
        <SideBar/>
      </div>
    </div>
  );
}

export default App
