import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherDataCard } from "./components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    // collect information for location.
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    axios
      .get(
        `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setData(res.data))
      .catch((err) => console.warn(err));
  }, [lat, long]);

  return (
    <div className="App">
      {(typeof data != "undefined") ? (
        <WeatherDataCard weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
