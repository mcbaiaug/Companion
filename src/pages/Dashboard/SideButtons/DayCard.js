import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { weatherCodes } from '../weatherCodes'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    marginTop: '6%',
    minWidth: '125px',
    [theme.breakpoints.down('xs')]: {
      marginTop:0,
    },
    
  },
  media: {
    height: 160,
  },

}))

var moment = require('moment')

const DayCard = ({ reading }) => {
  const classes = useStyles()
  let newDate = new Date()
  // const weekday = reading.dt * 1000
  // const weekday = 21600000
  // console.log(weekday)
  // newDate.setTime(weekday)

  console.log(reading)

  function weatherParse(id) {
    console.log('weatherCodes:', weatherCodes[id])
    if (!weatherCodes[id]) {
      //check if weather code exists for this id
      //no weather code exists if not base case description
      id = ~~(id / 100) * 100 // sets last 2 digits of number to 0; ex: 813 becomes 800
    }
    const description = weatherCodes[id]

    return description
  }

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        {/* Add CardActionArea if you want these to be a button */}
        {/* image={require(`./WeatherImages/${weatherParse(reading.weather[0].id)}.gif`)} */}
        <CardMedia
          className={classes.media}
          component="image"
          // image={require('./WeatherImages/Thunderstorm.gif')}
          image={require(`./WeatherImages/${weatherParse(reading.weather[0].id)}.gif`)}
          title={moment(newDate).format('dddd')}
        />
        <CardContent>
          <Typography variant="subtitle1">{Math.round(reading.main.temp_min)} °F</Typography>
          {/* <Typography variant="subtitle1">{weatherParse(reading.weather[0].id)}</Typography> */}
          <Typography variant="subtitle1">{moment(newDate).format('dddd')}</Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            {moment(newDate).format('MMMM Do, YYYY')}
          </Typography>
        </CardContent>

        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
      </Card>
    </Grid>

    // <div className="col-sm-2">
    //   <div className="card">
    //     <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
    //     <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
    //     <i className={imgURL}></i>
    //     <h2>{Math.round(reading.main.temp)} °F</h2>
    //     <div className="card-body">
    //       <p className="card-text">{reading.weather[0].description}</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default DayCard
