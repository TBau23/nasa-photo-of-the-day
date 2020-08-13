import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

import PrimaryDiv from './Components/PrimaryDiv'


function App() {
  
  const BASE_URL = 'https://api.nasa.gov/planetary/apod'
  const API_KEY = 'OtfbpAIdh5pPnTEXte62zlEQjMNlThE2FbKitfNW'
  const [nasaData, setNasaData] = useState({})


  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
      .then(res => {
        setNasaData(res.data)
      })
      .catch(err => {
        debugger
      })

  }, [])


  return (
    <div className="App">
    <PrimaryDiv 
    nasaData={nasaData}
    setNasaData={setNasaData}
    />
    
    </div>
  );
}

export default App;
