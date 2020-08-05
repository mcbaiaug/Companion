import React from 'react'
import { weatherCodes } from './weatherCodes'

const Conditions = (props) => {
  function weatherParse(id) {
    console.log('weatherCodes:', weatherCodes[id])
    if (!weatherCodes[id]){ //check if weather code exists for this id
      //no weather code exists if not base case description
      id = ~~(id / 100) * 100 // sets last 2 digits of number to 0; ex: 813 becomes 800
    }
    const description = weatherCodes[id]
    console.log(description)
    
    // setBackground(`${description}.gif`)
    // switch (true) {
    //   case id >= 200 && id <= 232:
    //     console.log('Thunderstorm')
    //     break
    //   case id >= 300 && id <= 321:
    //     console.log('Drizzle')
    //     break
    //   case id >= 500 && id <= 531:
    //     console.log('Rain')
    //     break
    //   case id >= 600 && id <= 622:
    //     console.log('Snow')
    //     break
    //   case id >= 701 && id <= 781:
    //     console.log('Snow')
    //     break
    //   case id===800:
    //     console.log('Clear')
    //     break
    //   case id >= 701 && id <= 781:
    //     console.log('Snow')
    //     break
    //   default:
    //     break
    // }
  }

  return (
    <div>
      {props.error && <small>Please enter a valid city.</small>}

      {props.loading && <div />}

      {props.responseObj.cod === 200 ? (
        <div>
          {/* <p>
            <strong>{props.responseObj.name}</strong>
          </p> */}
          {/* <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees out with{' '}
            {props.responseObj.weather[0].main}.
          </p> */}
          {weatherParse(props.responseObj.weather[0].id)}
        </div>
      ) : null}
    </div>
  )
}

export default Conditions
