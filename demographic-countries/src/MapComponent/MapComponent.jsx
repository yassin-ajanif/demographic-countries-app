import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'
import './MapComponent.css'

const MapComponent = () => {

 const mapContainerRef = useRef(null);


  useEffect(() => {

    mapboxgl.accessToken = 'pk.eyJ1IjoieWFzc2luYWphbmlmIiwiYSI6ImNsbDEwaTZsMjBsYnEzY3FyYnZwYWw4b2UifQ.rnRh32obkmPHWHFxFVPacg';
    const countryCoordinates = [-7.6184, 31.7917];

    const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: countryCoordinates,
        zoom: 2 ,// Adjust the zoom level as needed
        showAttribution: false 
      });
  
      const marker = new mapboxgl.Marker()
      .setLngLat(countryCoordinates)
      .addTo(map);

    

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapContainerRef} className='glob'></div>;
};

export default MapComponent;
