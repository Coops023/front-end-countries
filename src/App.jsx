

import React, {useState, useEffect, createContext } from 'react';
import HomeScreen from "./pages/home-screen"
import Card from './Components/Card';
import Search from './Components/Search';
import Filter from './Components/Filter';
import { Link, Route, Routes } from 'react-router-dom';
import CountryDetails from './pages/country-details';

export const ThemeContext = createContext(null)



export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/countryDetails/:name' element={<CountryDetails/>}></Route>
    </Routes>
  )
}


