import React, { useState, useEffect } from 'react'
import Conditions from './Conditions';
import apiConfig from '../../apiKeys'

const Forecast = () => {
  let [city, setCity] = useState('Eau Claire')
  let [unit, setUnit] = useState('imperial')
  let [responseObj, setResponseObj] = useState({})
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)
 



//Fetches weather data every 5 minutes
  useEffect(() => {
    getForecast()
    const interval = setInterval(() => {
      getForecast()
    }, (5*60*1000));
    return () => clearInterval(interval)
  },[])


  function getForecast() {
    if (city.length === 0) {
      return setError(true)
    }
    // Clear state in preparation for new data
    setError(false)
    setResponseObj({})

    setLoading(true)


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiConfig.apikey}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error()
        }

        setResponseObj(response)
        console.log(response)
        setLoading(false)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
        console.log(err.message)
      })
  }

  return (
    <div>
      {/* <button onClick={getForecast}>Help</button> */}
    
      <Conditions responseObj={responseObj} error={error} loading={loading} />
     {/* { console.log({responseObj})} */}
     {/* <p>It is currently {responseObj.weather[0].description}.</p> */}
      
    </div>
  )
}

export default Forecast
