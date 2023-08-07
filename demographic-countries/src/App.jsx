
import React,{ useState,useEffect } from 'react'
import './App.css'
import CountryInfo from './countryInfo/CountryInfo'
import AppLandingPage from './LandingPage/AppLandingPage'
import ErrorPage from './ErrorPage/ErrorPage'
import {BrowserRouter,Routes,Route, useNavigate} from 'react-router-dom'
import MapComponent from './MapComponent/MapComponent'


function App() {

const [SortedCountriesByLetter,setSortedCountriesByLetter]=useState([])
const [FiltredListOfCountries,setFiltredListOfCountries]=useState([])
const [countryPickedInfo,setCountryPickedInfo]=useState(null)
const [countryPickedCordinates,setCountryPickedCordinates]=useState(null)
const [ErrorMessage,setErrorMessage]=useState(null)
const navigate = useNavigate()

console.log(ErrorMessage)

function navigateTocountryInfoPage(){

  navigate('/countryInfo')
}

function navigateToErrorPage(){

  navigate('/pagenotfound')
}

async function DataCountryFetch(pickedCountry){
  
  let response

  try {

      response =  await fetch(`https://restcountries.com/v3.1/name/${pickedCountry}`)
    
      const DataCountry = await response.json()

      if(!response.ok) throw new Error ('something went wrong with a server')
      
      // datacountry returns an array width a single element
      const contentOfDataCountry = DataCountry[0]
      
      const countryName = contentOfDataCountry.name.common
      const countryCapital = contentOfDataCountry.capital[0]
      const countryPopulation = contentOfDataCountry.population
      // we will access to contentOfDataCountry.currencies without using 
      // it name of property becuase it is variable we're gong to use 
      // Object.keys() built in function to return the values of the object without
      // call it's property, we need the first value
      const countryCurrency = Object.values(contentOfDataCountry.currencies)[0].name
      const countryLanguages =  Object.values(contentOfDataCountry.languages).join(', ')
      const flagImage = contentOfDataCountry.flags.png
      const subRegion = contentOfDataCountry.subregion

      console.log(countryLanguages)
      
      setCountryPickedInfo({
          
        name:countryName,
        capital:countryCapital,
        population:countryPopulation,
        currency:countryCurrency,
        languages:countryLanguages,
        flag:flagImage,
        subRegion:subRegion

      })
    }

     catch(error){ 

      if(!response.ok){

        setErrorMessage(error.message)
        navigateToErrorPage()
      }
      else{
        //console.log('the infos of this country are not available')}
        setErrorMessage('the infos of this country are not available')
        navigateToErrorPage()
    }
      
       
     }}
     
async function getCountriesNamesList(){
       
      const fetchCountriesList = await fetch('https://restcountries.com/v3.1/all')
      
      const CountriesList = await fetchCountriesList.json()
        
      // put the countries in an array
      const CountriesListArray = CountriesList.map(country => country.name.common)
      
      return CountriesListArray
       
     }
     
async function sortCountriesNamesListByLetter(){
       
       const countryNamesList = await getCountriesNamesList()
       let SortingCountriesByLetter = []
       // transform alphabet string to an array
       const alphabet = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");  
       
       for(let index=0; index<alphabet.length; index++) {
         
         const filteredCountryByLetter = 
         countryNamesList.filter(country => country[0]===alphabet[index])
         // we push 26 times each letter at once
         SortingCountriesByLetter.push(...filteredCountryByLetter)
         
       }
       
       setSortedCountriesByLetter(SortingCountriesByLetter)
       
     }
     

function checkCountries(event){
 
  const nameOfCountryTyped = event.target.value
  const filtredCountries = SortedCountriesByLetter.filter( country => country.includes(nameOfCountryTyped))
  setFiltredListOfCountries(prevList => filtredCountries)
  return filtredCountries
  

}

function pickThisCountry(countryPicked){

    DataCountryFetch(countryPicked)
}

function displayFiltredCountries(){

  return FiltredListOfCountries.map
  ((country,index) => <div className='country' key={index}
  onClick={()=>{pickThisCountry(country);
    navigateTocountryInfoPage()
    }}>{country}</div>)

}

function removeSuggestedCountriesList(){

 setFiltredListOfCountries([])

}


useEffect(()=>{

  sortCountriesNamesListByLetter()

},[])

const AppLandingPageProps ={

  removeSuggestedCountriesList:removeSuggestedCountriesList,
  checkCountries:checkCountries,
  displayFiltredCountries:displayFiltredCountries,
  
}

  return (
     
  <Routes>

    <Route index element={<AppLandingPage {...AppLandingPageProps}/>} />

    <Route path='/countryInfo' 
     element={<CountryInfo {...countryPickedInfo} />} />
    
    <Route path='/pagenotfound' 
    element={<ErrorPage ErrorMessage={ErrorMessage}/>} />

  </Routes>


  )


   

}

export default App
