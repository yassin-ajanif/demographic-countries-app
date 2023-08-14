import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './MapComponent.css'

const MapComponent = ({countryCoordinates}) => {

 const mapContainerRef = useRef(null);
 let map
 let observer

console.log(countryCoordinates)

 function displayTheLocationMap(Coordinates){

  mapboxgl.accessToken = 'pk.eyJ1IjoieWFzc2luYWphbmlmIiwiYSI6ImNsbDEwaTZsMjBsYnEzY3FyYnZwYWw4b2UifQ.rnRh32obkmPHWHFxFVPacg';
  //const countryCoordinates = [-7.6184, 31.7917];
 


   map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: Coordinates,
      zoom: 2 ,// Adjust the zoom level as needed
      showAttribution: false 
    });

    const marker = new mapboxgl.Marker()
    .setLngLat(countryCoordinates)
    .addTo(map);

    return () => {
      map.remove();
    };
 }

 function AutoResizeMap () {
  
    map.resize();
  
 }


 function checkingMapContainerSizeChanged(){

  observer = new ResizeObserver(

   elementsToObserve=>{
 
    for (const element of elementsToObserve){
     
     const HeightOfComponent = element.contentRect.height

     

     AutoResizeMap ()
 
    }
 
   })
  
  const elementsToObserve = mapContainerRef.current
  
  observer.observe(elementsToObserve)
  
  
 
}

useEffect(()=>{

  displayTheLocationMap(countryCoordinates)
  checkingMapContainerSizeChanged()

return () => {

 observer.disconnect()

}

},[])



  return <div ref={mapContainerRef} className='glob' 
  ></div>;
};

export default MapComponent;
