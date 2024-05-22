import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>

    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routes>
    </BrowserRouter>
  )
}
