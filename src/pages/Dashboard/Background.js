import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  background: {
    // maxWidth: '100%',
    // maxHeight: '100%',
    // right:0,
    width:'100%',
    height: '100%',

    zIndex: -1,
    position:"relative",
  },
}))

function Background() {
  const classes = useStyles()
  const background = require('./Backgrounds/testBackground.gif')

  return <img className={classes.background} src={background} alt="" />
}

export default Background
