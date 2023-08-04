import React from 'react';
import './CountryInfo.css'; // Import your custom CSS file for styling
import capitalImg from './countryInfo-assets/governmental.png'
import populationImg from './countryInfo-assets/people.png'
import phoneCodeImg from './countryInfo-assets/telephone.png'
import languagesImg from './countryInfo-assets/translate.png'
import currencyImg from './countryInfo-assets/currency.png'


const CountryInfo = ({ 

  name, 
  capital,
  population,
  phoneCode,
  languages,
  ImageImage,
  territories,
  currency,
  areaSize,

}) => {

  return (

<div className='container-component'>

    <div className='container-page'>
   
   <div className="container-info">

    <div className="countryName-image">
    <h1>{name}</h1>
      <img src={ImageImage} alt={`${name} Flag`} />
      
    </div>

    <div className="country-info">
      
   
      <div className="capital-image">
        <img src={capitalImg}alt={`${capital} Image`} />
        <p><strong>Capital:</strong> {capital}</p>
      </div>

      <div className="pouplation-image">
        <img src={populationImg} alt={`${population} Image`} />
        <p><strong>Population:</strong> {population}</p>
      </div>
      
      <div className="phoneCode-image">
        <img src={phoneCodeImg} alt={`${phoneCode} Image`} />
        <p><strong>Phone Code:</strong> {phoneCode}</p>
     </div>

     <div className="currency-image">
        <img src={currencyImg} alt={`${currencyImg} Image`} />
        <p><strong>Currency:</strong> {currency}</p>
      </div>

      <div className="languages-images">

        <img src={languagesImg} alt={`Languages Image`} />
        <strong>Languages:</strong> 
        <p>{languages.join(', ')} </p>

      </div>

      <div className="territories-image">
        <div className="territories">
        <strong>Territories:</strong>

        <p> {territories.join(', ')}</p>      

        </div>
        <div className="map">map</div>
      </div>

      </div>

      </div>
    
  </div>

    <div className="background">
    
<div class="container">
<div class="container-images">
 
<img src="https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2013/02/nasa-lightsnight-world.jpg?resize=750%2C436&ssl=1" alt=""/>
<img src="https://i0.wp.com/blog.education.nationalgeographic.org/wp-content/uploads/2013/02/nasa-lightsnight-world.jpg?resize=750%2C436&ssl=1" alt=""/>
  
 
</div>

</div>

    </div>

</div>  

  );
};

export default CountryInfo;
