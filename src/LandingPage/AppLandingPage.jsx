
import React from 'react'
import search from '../assets/search.png'

const AppLandingPage = ({

removeSuggestedCountriesList,
checkCountries,
displayFiltredCountries,


}) => {



  return (
  
    <div className="app" onClick={removeSuggestedCountriesList}>
  
    <div className="countryInfo-landingPage">
  
       <h1>The Country Info Generator</h1>
       <h2>Get The Information About Your Intrested Country</h2>
  
      <div className="search-container">
       
       <input type="text" className="search-input" 
       placeholder="Search..." 
       onChange={()=>checkCountries(event)}
       />
       <img className="search-icon" 
       src={search}
       />
  
  <div className="searchResults">
      
      <div className="searchResultsTopLine"></div>
      {
      displayFiltredCountries()
      } 
  
         </div>
      </div>
  
      
  
     </div>

    
  
    </div>
  )
  
    }

    export default AppLandingPage