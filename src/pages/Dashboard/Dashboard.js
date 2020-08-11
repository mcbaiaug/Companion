import React, { useState } from 'react'
import ResDrawer from './ResDrawer'
import { Box, makeStyles, Paper, Grid } from '@material-ui/core'
import Companion from './Companion'
import Background from './Background'
// import Forecast from './Forecast'
import FiveDayForecast from './SideButtons/FiveDayForecast'
import { useSelector } from 'react-redux'
import Agenda from './Agenda/Agenda'


const useStyles = makeStyles((theme) => ({
  wrap: {
    height: '93vh',
    marginLeft: 55, //Change this to match the width of the drawer
    '@media (max-width: 800px)' : {
     marginLeft:0, 
    }
        
      
   

    // margin: 0,
    // padding: 0,
    // position: 'relative',
  },

 

 

  grid: {
    height: '100%',
    minHeight: '100%',
    marginTop: 60,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

    color: theme.palette.text.secondary,
  },

  charWrap: {
    // backgroundColor: theme.palette.primary.light,
    // objectFit: 'cover',
    height: '40%',
    width: 170,
  
  },

  agendaWrap: {
    backgroundColor: theme.palette.primary.dark,
    height: '60%',
    overflowX: 'hidden', 
    overflowY: 'auto' ,
    // overflow:'hidden',
    '&::-webkit-scrollbar': {
      width: 0,  /* Remove scrollbar space */
      background: 'transparent', /* Optional: just make scrollbar invisible */
  },
    [theme.breakpoints.down('xs')]: {
      height: '40%',
    },
  },

  myTasks: {
    height: '40%',
    backgroundColor: theme.palette.primary.dark,
  },

  adaptive: {
    height: '60%',
    backgroundColor: theme.palette.primary.light,
    [theme.breakpoints.down('xs')]: {
      height: '40%',
    },
  },

  char: {
  
  },

}))

function Dashboard() {
  const classes = useStyles()

  const [index, setIndex] = useState(0)
  const props = { index: index, setIndex: setIndex }
  // const [forecast, setForecast] = React.useContext(ForecastContext)
  const forecast = useSelector(state => state.displayForecast)
  console.log('Forecast')
  console.log(forecast)


  return (
    <div className={classes.wrap}>
      <ResDrawer {...props} />
      {/* had spacing of 3  */}
      <Grid className={classes.grid} container >
        <Grid item xs={12} sm={8} className={classes.adaptive}>
          {/* <Paper className={classes.paper}>Check</Paper> */}
          {forecast&&<FiveDayForecast />}
        </Grid>
        <Grid item xs={12} sm={4} className={classes.agendaWrap}>
          <Agenda/>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.myTasks}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.charWrap}>
          {/* <img className={classes.cat} src={require('./First Background Test.png')} alt="Cat Animation" /> */}
          <Background />
          <Companion  className={classes.char} {...props}  />
          
         
        </Grid>
        {/* <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid> */}
      </Grid>
    </div>
  )
}

export default Dashboard
