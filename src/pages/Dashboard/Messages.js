import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardMedia } from '@material-ui/core'

// const bubble = require('./Companions/PlainTextBubble.png')
const bubble = require('./Companions/TextBubbleAnimation.gif')
const revBubble = require('./Companions/ReverseTextBubbleAnimation.gif')
const m1 = 'You have 2 upcoming meetings!'

const useStyles = makeStyles((theme) => ({
  text: {
    fontFamily: 'PixelMaster',
    color: 'Secondary',
  },
  media: {
    width: 220,
    height: 220,
  },

  card: {
  
    position: 'relative',
    display: 'inline',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    float: 'left',
    marginLeft: '-10%',
    marginTop: '5%'
  },
  overlay: {
    position: 'absolute',
    top: '15px',
    left: '20px',
    color: 'black',
    backgroundColor: 'transparent',
    fontFamily: 'PixelMaster',
    fontSize: '1.5em',
  },
}))

function Messages() {

  function toggle(){
    
  }
  const classes = useStyles()
  return (
    <Card style={{}} className={classes.card}>
      <CardMedia image={bubble} className={classes.media} />
      <div className={classes.overlay}>{m1}</div>
    </Card>
  )
}

export default Messages
