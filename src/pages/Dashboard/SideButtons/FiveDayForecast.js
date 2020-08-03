import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import apiConfig from '../../../apiKeys'
import { ForecastContext } from '../../../context/forecast'
import DayCard from './DayCard'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  media: {
    height: 140,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  grid:{
    margin:'auto',
  }
}))

function FiveDayForecast() {
  const classes = useStyles()
  let [city, setCity] = useState('Eau Claire')
  let [unit, setUnit] = useState('imperial')
  let [fullData, setFullData] = useState({})
  const [dayData, setDayData] = useState([])
  let [error, setError] = useState(false)
  let [loading, setLoading] = useState(false)
  const [forecast, setForecast] = React.useContext(ForecastContext)

  function formatDayCards() {
    // dayData.map((reading,index) => console.log(reading))
    return dayData.map((reading, index) => <DayCard reading={reading} key={index} />)
  }

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&APPID=${apiConfig.apikey}`
      )
      const data = await response.json()

      const dailyData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'))
      setDayData(dailyData)
    }
    fetchForecast()

    // const interval = setInterval(() => {
    //   getForecast()
    // }, (5*60*1000));
    // return () => clearInterval(interval)
  }, [])

  // async function getForecast() {
  //   console.log('triggered')
  //   if (city.length === 0) {
  //     return setError(true)
  //   }

  //   // Clear state in preparation for new data
  //   setError(false)
  //   // setFullData({})

  //   setLoading(true)
  //   try {
  //     const response = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&APPID=${apiConfig.apikey}`
  //     )
  //     const data = await response.json()
  //     const dailyData = data.list.filter((reading) => reading.dt_txt.includes('18:00:00'))
  //     setDayData(dailyData)
  //     console.log(dayData)
  //     //  if (data.cod !== 200) {
  //     //   throw new Error()
  //     // }
  //   } catch(err) {
  //     console.error(err)
  //   }
  //   //  console.log(dayData)
  //   // setDailyData(dayData => data.list.filter((reading) => reading.dt_txt.includes('18:00:00')))
  //   // console.log(dailyData[0].main.temp)
  //   // if (data.cod !== 200) {
  //   //   throw new Error()
  //   // }
  //   // console.log(dayData.reading)
  //   // setDailyData(dayData => ...dayData, dailyData)
  //   // console.log(dayData)
  //   // setFullData(data.list)
  //   // console.log(response)
  //   // console.log(dayData)
  //   // setLoading(false)
  // }

  return (
    <div className={classes.root}>
    <Grid className={classes.grid} container wrap='nowrap' spacing={1}>
    
        {formatDayCards()}
      
    </Grid>
  </div>
  )
}

export default FiveDayForecast
