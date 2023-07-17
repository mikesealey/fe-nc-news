import './App.css'
import { useState } from 'react'
import { Route, Routes } from "react-router-dom"


import Header from './components/Header'
import Home from './components/Home'
import Topics from './components/Topics'
import Users from './components/Users'
import Search from './components/Search'


function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/topics" element={<Topics/>}></Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
      </Routes>
    </>
  )
}

export default App
