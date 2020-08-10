import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core'
// import { MessageContext } from '../../context/message'
import { useSelector, useDispatch} from 'react-redux'
import {displayMessage} from '../../actions'


const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'PixelMaster',
    color: 'Secondary',
  },
  media: {
    width: 200,
    height: 200,
  },

  card: {
    position: 'relative',
    display: 'inline',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    float: 'left',
    marginLeft: '-10%',
    marginTop: '5%',
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    color: 'black',
    backgroundColor: 'transparent',
    fontFamily: 'PixelMaster',
    fontSize: '1.4em',
  },
}))

function Messages() {
  // const bubble = require('./Companions/PlainTextBubble.png')
  const bubble = require('./Companions/TextBubbleAnimation.gif')
  const revBubble = require('./Companions/ReverseTextBubbleAnimation.gif')
  const between = require('./Companions/blank.gif')
  const m1 = 'You have 2 upcoming meetings!'
  const images = { bubble, revBubble }
  const classes = useStyles()
  const [image, setImage] = useState(images.bubble)
  // const [message, setMessage] = React.useContext(MessageContext)
  const dispatch = useDispatch()
  const message = useSelector(state => state.displayMessage)



  function toggle() {
    var x = document.getElementById('message')
    x.style.display = 'none'
    setImage(images.revBubble)
    setTimeout(() => {
      // set timer for 2 seconds
    //  setMessage(!message)
    dispatch(displayMessage())
     setImage(between)
      
    }, 2000)
  }



  useEffect(() => {
    const x = document.getElementById('message')
    console.log('fire')
    setTimeout(() => {
      // set timer for 2 seconds
      x.style.display = 'block'
      
    }, 2000)
  }, []) // On mount wait 2 seconds then display text
  

  return (
    <Card style={{}} className={classes.card}>
      <CardMedia image={image} className={classes.media} />
      <div
        id="message"
        onClick={() => {
          toggle()
        }}
        className={classes.overlay}
        style={{display:'none'}}
      >
        {m1}
      </div>
    </Card>
  )
}

export default Messages
