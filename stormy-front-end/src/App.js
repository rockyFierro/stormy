import React, { useEffect, useState } from "react"
import axios from "axios"

function App() {
  
  const [ lat, setLat ] = useState([])
  const [ long, setLong ] = useState([])

  useEffect( () => {
    // collect information for location.
    navigator.geolocation.getCurrentPosition( function(position){
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)
    } )

    
    console.log(lat, long)
  }, [lat, long])

  return (
    <div className="App">
    </div>
  );
}

export default App
