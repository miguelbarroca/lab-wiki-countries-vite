import { useState } from 'react'
import './App.css'
import countries from './countries.json'
//components imported from
import Navbar from './components/Navbar'
import CountriesList from './components/CountriesList'
import CountryDetails from './components/CountryDetails'
import { Route, Routes } from 'react-router-dom'
//Pages imported from 


function App() {
  const [countriesArray, setCountriesArray] = useState(countries)
  
  return <div className='App'>
    <Navbar />
    <CountriesList countries={countriesArray}/>

    <Routes>
      <Route path='/country/:alpha3Code' element = {<CountryDetails countries={countriesArray}/>} /> 
      
    </Routes>
    

  </div>
}
export default App