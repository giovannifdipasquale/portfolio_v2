import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './components/SideBar/SideBar'
import './App.css'

function App() {

  return (
    <div className="h-screen w-screen p-3 font-geologica">
      <div className="border flex flex-col border-solid h-full w-full bg-blue-300">
        <h1 className="font-geologica text-5xl m-8"> Giovanni Di Pasquale </h1>
        <div className="grow grid grid-cols-12 bg-amber-400 ">
          <SideBar />
        </div>
      </div>
    </div>
  );
}

export default App
