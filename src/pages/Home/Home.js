import React, { useState, useEffect } from 'react'
import { Typography, Paper, Grid } from '@material-ui/core'
// import { ReactComponent as Finn } from './finn.svg'
import { makeStyles } from '@material-ui/core/styles'
import Nav from './Nav'
import { useAuth } from "../../auth-context";
// import { ReactComponent as Stages } from './CatStages.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  secDark: {
    color: theme.palette.secondary.dark,
  },
  secLight: {
    color: theme.palette.secondary.light,
  },
}))

function Home() {
  const classes = useStyles()

  const { state, doLogout } = useAuth()
  const { isLogged, user } = state

  return (
    <div>
      <Nav />
      {user && <span style={{ marginLeft: '50px' }}>Welcome {user.name}</span>}

      <div className={classes.root}>
        <Grid container spacing={3}>
          {/* <Grid item xs={12}>
                        <Paper className={classes.paper}>xs=12</Paper>
                    </Grid> */}
          <Grid alignContent="center" container justify="center" item xs={12} sm={6}>
            {/* <Paper className={classes.paper}>xs=12 sm=6</Paper> */}
            <Typography variant="h4">Choose a companion and grow along with them!</Typography>
            <Typography variant="h5" className={classes.secLight}>
              Let your companion help you!
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <SvgIcon className={classes.cat} component={Stages} viewBox="0 0 180 180" fontSize="large" /> */}
            <img className={classes.cat} src={require('./CatStagesAnimation.gif')} alt="Cat Animation" />
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Home
