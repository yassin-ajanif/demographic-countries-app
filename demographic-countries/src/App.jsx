import { useState } from 'react'
import './App.css'
import CountryInfo from './countryInfo/CountryInfo'

function App() {

  const infoCountry ={

    name:'Morroco', 
    code: '10',
    capital:'Rabat',
    population:'39milions',
    phoneCode:'+212',
    languages:['French','Arabic','Amazigh'],
    flagImage:'Rabat',
    territories:[
    "Montserrat",
    "Guernsey",
    "Falkland Islands",
    "Isle of Man",
    "Heard Island and McDonald Islands",
    "Bermuda",
    "South Georgia and the South Sandwich Islands",
    "Gibraltar",
    "Anguilla",
    "Saint Helena",
    "Cayman Islands",
    "Jersey",
    "Turks and Caicos Islands",
    "British Virgin Islands",
    "Pitcairn Islands",
    "British Indian Ocean Territory",
    ],
    currency:'MAD',
    areaSize:'100km'
  }

  return (
   
   <div className="app">

     <CountryInfo {...infoCountry}/>
  
    </div>
  )
}

export default App
