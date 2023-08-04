import { useState,useRef } from 'react'
import './App.css'
import CountryInfo from './countryInfo/CountryInfo'
import search from './assets/search.png'


function App() {

const [FiltredListOfCountries,setFiltredListOfCountries]=useState([])
const [pickedCountry,setPickedCountry]=useState('')

console.log(pickedCountry)

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

  const listCountries = [
    "Andorra"
    ,"United Arab Emirates"
    ,"Afghanistan"
    ,"Antigua and Barbuda"
    ,"Anguilla"
    ,"Albania"
    ,"Armenia"
    ,"Netherlands Antilles"
    ,"Angola"
    ,"Antarctica"
    ,"Argentina"
    ,"American Samoa"
    ,"Austria"
    ,"Australia"
    ,"Aruba"
    ,"Aland Islands"
    ,"Azerbaijan"
    ,"Bosnia and Herzegovina"
    ,"Barbados"
    ,"Bangladesh"
    ,"Belgium"
    ,"Burkina Faso"
    ,"Bulgaria"
    ,"Bahrain"
    ,"Burundi"
    ,"Benin"
    ,"Saint Barthelemy"
    ,"Bermuda"
    ,"Brunei"
    ,"Bolivia"
    ,"Bonaire, Saint Eustatius and Saba "
    ,"Brazil"
    ,"Bahamas"
    ,"Bhutan"
    ,"Bouvet Island"
    ,"Botswana"
    ,"Belarus"
    ,"Belize"
    ,"Canada"
    ,"Cocos Islands"
    ,"Democratic Republic of the Congo"
    ,"Central African Republic"
    ,"Republic of the Congo"
    ,"Switzerland"
    ,"Ivory Coast"
    ,"Cook Islands"
    ,"Chile"
    ,"Cameroon"
    ,"China"
    ,"Colombia"
    ,"Costa Rica"
    ,"Serbia and Montenegro"
    ,"Cuba"
    ,"Cape Verde"
    ,"Curacao"
    ,"Christmas Island"
    ,"Cyprus"
    ,"Czechia"
    ,"Germany"
    ,"Djibouti"
    ,"Denmark"
    ,"Dominica"
    ,"Dominican Republic"
    ,"Algeria"
    ,"Ecuador"
    ,"Estonia"
    ,"Egypt"
    ,"Western Sahara"
    ,"Eritrea"
    ,"Spain"
    ,"Ethiopia"
    ,"Finland"
    ,"Fiji"
    ,"Falkland Islands"
    ,"Micronesia"
    ,"Faroe Islands"
    ,"France"
    ,"Gabon"
    ,"United Kingdom"
    ,"Grenada"
    ,"Georgia"
    ,"French Guiana"
    ,"Guernsey"
    ,"Ghana"
    ,"Gibraltar"
    ,"Greenland"
    ,"Gambia"
    ,"Guinea"
    ,"Guadeloupe"
    ,"Equatorial Guinea"
    ,"Greece"
    ,"South Georgia and the South Sandwich Islands"
    ,"Guatemala"
    ,"Guam"
    ,"Guinea-Bissau"
    ,"Guyana"
    ,"Hong Kong"
    ,"Heard Island and McDonald Islands"
    ,"Honduras"
    ,"Croatia"
    ,"Haiti"
    ,"Hungary"
    ,"Indonesia"
    ,"Ireland"
    ,"Israel"
    ,"Isle of Man"
    ,"India"
    ,"British Indian Ocean Territory"
    ,"Iraq"
    ,"Iran"
    ,"Iceland"
    ,"Italy"
    ,"Jersey"
    ,"Jamaica"
    ,"Jordan"
    ,"Japan"
    ,"Kenya"
    ,"Kyrgyzstan"
    ,"Cambodia"
    ,"Kiribati"
    ,"Comoros"
    ,"Saint Kitts and Nevis"
    ,"North Korea"
    ,"South Korea"
    ,"Kuwait"
    ,"Cayman Islands"
    ,"Kazakhstan"
    ,"Laos"
    ,"Lebanon"
    ,"Saint Lucia"
    ,"Liechtenstein"
    ,"Sri Lanka"
    ,"Liberia"
    ,"Lesotho"
    ,"Lithuania"
    ,"Luxembourg"
    ,"Latvia"
    ,"Libya"
    ,"Morocco"
    ,"Monaco"
    ,"Moldova"
    ,"Montenegro"
    ,"Saint Martin"
    ,"Madagascar"
    ,"Marshall Islands"
    ,"Macedonia"
    ,"Mali"
    ,"Myanmar"
    ,"Mongolia"
    ,"Macao"
    ,"Northern Mariana Islands"
    ,"Martinique"
    ,"Mauritania"
    ,"Montserrat"
    ,"Malta"
    ,"Mauritius"
    ,"Maldives"
    ,"Malawi"
    ,"Mexico"
    ,"Malaysia"
    ,"Mozambique"
    ,"Namibia"
    ,"New Caledonia"
    ,"Niger"
    ,"Norfolk Island"
    ,"Nigeria"
    ,"Nicaragua"
    ,"Netherlands"
    ,"Norway"
    ,"Nepal"
    ,"Nauru"
    ,"Niue"
    ,"New Zealand"
    ,"Oman"
    ,"Panama"
    ,"Peru"
    ,"French Polynesia"
    ,"Papua New Guinea"
    ,"Philippines"
    ,"Pakistan"
    ,"Poland"
    ,"Saint Pierre and Miquelon"
    ,"Pitcairn"
    ,"Puerto Rico"
    ,"Palestinian Territory"
    ,"Portugal"
    ,"Palau"
    ,"Paraguay"
    ,"Qatar"
    ,"Reunion"
    ,"Romania"
    ,"Serbia"
    ,"Russia"
    ,"Rwanda"
    ,"Saudi Arabia"
    ,"Solomon Islands"
    ,"Seychelles"
    ,"Sudan"
    ,"Sweden"
    ,"Singapore"
    ,"Saint Helena"
    ,"Slovenia"
    ,"Svalbard and Jan Mayen"
    ,"Slovakia"
    ,"Sierra Leone"
    ,"San Marino"
    ,"Senegal"
    ,"Somalia"
    ,"Suriname"
    ,"South Sudan"
    ,"Sao Tome and Principe"
    ,"El Salvador"
    ,"Sint Maarten"
    ,"Syria"
    ,"Swaziland"
    ,"Turks and Caicos Islands"
    ,"Chad"
    ,"French Southern Territories"
    ,"Togo"
    ,"Thailand"
    ,"Tajikistan"
    ,"Tokelau"
    ,"Timor Leste"
    ,"Turkmenistan"
    ,"Tunisia"
    ,"Tonga"
    ,"Turkey"
    ,"Trinidad and Tobago"
    ,"Tuvalu"
    ,"Taiwan"
    ,"Tanzania"
    ,"Ukraine"
    ,"Uganda"
    ,"United States Minor Outlying Islands"
    ,"United States"
    ,"Uruguay"
    ,"Uzbekistan"
    ,"Vatican"
    ,"Saint Vincent and the Grenadines"
    ,"Venezuela"
    ,"British Virgin Islands"
    ,"U.S. Virgin Islands"
    ,"Vietnam"
    ,"Vanuatu"
    ,"Wallis and Futuna"
    ,"Samoa"
    ,"Kosovo"
    ,"Yemen"
    ,"Mayotte"
    ,"South Africa"
    ,"Zambia"
    ,"Zimbabwe"
    ]


function checkCountries(event){
 
  const nameOfCountryTyped = event.target.value
  const filtredCountries = listCountries.filter( country => country.includes(nameOfCountryTyped))
  setFiltredListOfCountries(prevList => filtredCountries)
  return filtredCountries
  

}

function pickThisCountry(countryPicked){

   setPickedCountry(countryPicked)
}

function displayFiltredCountries(){

  return FiltredListOfCountries.map
  (country => <div className='country' 
  onClick={()=>pickThisCountry(country)}>{country}</div>)
}

function removeSuggestedCountriesList(){

 setFiltredListOfCountries([])

}




  return (
   
   <div className="app" onClick={removeSuggestedCountriesList}>

     {/*<CountryInfo {...infoCountry}/>*/}

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

export default App
