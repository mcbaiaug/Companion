import React, { useState, useEffect } from 'react'
import { Component } from 'react'
const finn1 = require('./Companions/FinnS1.gif')
const finn2 = require('./Companions/FinnS2.gif')
const finn3 = require('./Companions/FinnS3.gif')
const finn4 = require('./Companions/FinnS4.gif')
const finn5 = require('./Companions/CatStagesAnimation.gif')
const finnList = [finn1, finn2, finn3, finn4, finn5]

function Companion(props) {


  useEffect(() => {
    if (props.index%finnList.length === 2) {
      setTimeout(() => {  // set timer for 4.8 seconds, incremenet index when complete
        props.setIndex(prevIndex => prevIndex + 1)
      }, 4500)
    }
  }, [props.index, props.setIndex]) // if props.index or props.setIndex changes, exec function
  
  
  return (
    <div>
      {props.index}
      <img
        style={{
          width: 200,
          height: 200,
          objectFit: 'cover',
        }}
        src={finnList[props.index % finnList.length]}
        alt=""
      />
    </div>
  )
}

export default Companion
