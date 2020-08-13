import React, { useState, useEffect } from 'react'
import Messages from './Messages'
import Forecast from './Forecast'
import {useSelector} from 'react-redux'

function Companion(props) {
  const finn1 = require('./Companions/FinnS1.gif')
  const finn2 = require('./Companions/FinnS2.gif')
  const finn3 = require('./Companions/FinnS3.gif')
  const finn4 = require('./Companions/FinnS4.gif')
  const finn5 = require('./Companions/CatStagesAnimation.gif')
  const finnList = [finn1, finn2, finn3, finn4, finn5]
  // const [message, setMessage] = React.useContext(MessageContext)
  const message = useSelector(state =>state.displayMessage)
  const [height, setHeight] = useState(0)
  const {index, setIndex } = props

  useEffect(() => {
    //This sets a negative margin that is the size of the background image height
    //This reruns when the window is resized so it scales better
    function handleSize() {
      const height = document.getElementById('image').clientHeight
      console.log(height)
      setHeight(-height)
    }
    window.addEventListener('resize', handleSize)

    handleSize()

    return () => window.removeEventListener('resize', handleSize)
  }, [])



  useEffect(() => {
    if (index % finnList.length === 2) {
      setTimeout(() => {
        // set timer for 4.8 seconds, incremenet index when complete
        setIndex((prevIndex) => prevIndex + 1)
      }, 4500)
    }
  }, [index, setIndex, finnList.length, ]) // if props.index or props.setIndex changes, exec function

  return (
    <div style={{ textAlign: 'left', display: 'flex', width: '100%', height: '100%', marginTop: height }}>
      {/* {props.index} */}
      <Forecast />
      <img
        id="image"
        style={{
          // width: 200,
          // height: 200,
          marginLeft: '30%',
          maxWidth: '100%',
          maxHeight: '100%',
          objectFit: 'cover',
        }}
        src={finnList[props.index % finnList.length]}
        alt=""
      />
      {message && <Messages />}
    </div>
  )
}

export default Companion
