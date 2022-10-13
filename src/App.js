import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import locations from'./account.svg'
import { Routes,Route } from 'react-router';
import Home from './home';
import About from './about';



function App() {
return (
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='about' element={<About/>}></Route>
  </Routes>

)

}

export default App;
