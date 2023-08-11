import React, { useEffect,useState,useRef } from 'react';
import './CountryInfo.css'; // Import your custom CSS file for styling
import capitalImg from './countryInfo-assets/governmental.png'
import populationImg from './countryInfo-assets/people.png'
import phoneCodeImg from './countryInfo-assets/Subregion.png'
import languagesImg from './countryInfo-assets/translate.png'
import currencyImg from './countryInfo-assets/currency.png'
import MapComponent from '../MapComponent/MapComponent';
import { useLocation } from 'react-router-dom';

const CountryInfo = ({ CountryInfo }) => {
    
  //localStorage.clear()

    
    const { name, capital, population, subRegion,
      languages,ImageImage,territories,currency,flag,
      countryCoordinates }= storedCountryInfoIntoLocalStorage()

      

  const [loadingMap,setLoadingMap] = useState(false)
  const Page = useRef(null)

  // we you reload a page a state get initiated so all props get gone for this reason whe have to prevent page from reloading
  // if the user reloaded the page the countryInfo pros will be gone so we have to store them in localStorage
  
  function storedCountryInfoIntoLocalStorage(){

   // when user reload page countryInfo props get erased returning null
    const whenUserReloadPage = CountryInfo===null
    let CountryInfoReloadedIntoLocalStorage =JSON.parse(localStorage.getItem('CountryProps'))

    if(whenUserReloadPage){  }
   
    // when the props are existing, this is happen when we load the page by clicking our targeted counrty in landing page
    else{

      localStorage.setItem('CountryProps',JSON.stringify(CountryInfo))

     CountryInfoReloadedIntoLocalStorage = JSON.parse(localStorage.getItem('CountryProps'))

    }

    
    return CountryInfoReloadedIntoLocalStorage
    


  }

  return (

<div className='container-component' >

    <div className='container-page'>
   
   <div className="container-info" >

    <div className="countryName-image">
    <h1>{name}</h1>
      <img src={flag} alt={`${name} Flag`} />
      
    </div>

    <div className="country-info" ref={Page}>
      
   
      <div className="capital-image">
        <img src={capitalImg}alt={`${capital} Image`} />
        <p><strong>Capital:</strong> {capital}</p>
      </div>

      <div className="pouplation-image">
        <img src={populationImg} alt={`${population} Image`} />
        <p><strong>Population:</strong> {population}</p>
      </div>
      
      <div className="subRegion-image">
        <img src={phoneCodeImg} alt={`${subRegion} Image`} />
        <p><strong>SubRegion:</strong> {subRegion}</p>
     </div>

     <div className="currency-image">
        <img src={currencyImg} alt={`${currencyImg} Image`} />
        <p><strong>Currency:</strong> {currency}</p>
      </div>

      <div className="languages-images">

        <img src={languagesImg} alt={`Languages Image`} />
        <strong>Languages:</strong> 
        <p>{languages}</p>

      </div>

      <div className="territories-image">
        
        <div className="map">
        <MapComponent countryCoordinates={countryCoordinates}/>
        </div>

      </div>

      </div>

      </div>
    
  </div>

    <div className="background">
    
<div className="container">
<div className="container-images">
 
<img src="https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2013/02/nasa-lightsnight-world.jpg?resize=750%2C436&ssl=1" alt=""/>
<img src="https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2013/02/nasa-lightsnight-world.jpg?resize=750%2C436&ssl=1" alt=""/>
  
 
</div>

</div>

    </div>

</div>  

  );
};

export default CountryInfo;
