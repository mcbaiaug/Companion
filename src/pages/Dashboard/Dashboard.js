import React, { useState } from 'react'
import ResDrawer from './ResDrawer'
import { Box, makeStyles, Paper, Grid } from '@material-ui/core'
import Companion from './Companion'
import Background from './First Background Test.png'

const useStyles = makeStyles((theme) => ({
  wrap: {
    height: '90vh',
    
   

    // margin: 0,
    // padding: 0,
    // position: 'relative',
  },

  grid: {
    height: '85vh',
    marginTop: 60,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',

    color: theme.palette.text.secondary,
  },

  charWrap: {
    backgroundColor: theme.palette.primary.light,
    height: '40%',
  },

  agendaWrap: {
    backgroundColor: theme.palette.primary.dark,
    height: '60%',
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

  char: {},
}))

function Dashboard() {
  const classes = useStyles()

  const [index, setIndex] = useState(0)
  const props = { index: index, setIndex: setIndex }
  return (
    <div className={classes.wrap}>
      <ResDrawer {...props} />
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12} sm={8} className={classes.adaptive}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.agendaWrap}></Grid>
        <Grid item xs={12} sm={8} className={classes.myTasks}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={12}  sm={4} className={classes.charWrap}>
          {/* <img className={classes.cat} src={require('./First Background Test.png')} alt="Cat Animation" /> */}
          <Companion {...props} />
          
         
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
