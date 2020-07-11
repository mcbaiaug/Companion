import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, SvgIcon } from '@material-ui/core'
import { ReactComponent as Finn } from '../pages/Home/finn.svg'
import { makeStyles } from '@material-ui/core/styles'
import ResDrawer from '../pages/Home/ResDrawer'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  login: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
  },
}))

function BaseNav() {
  const history = useHistory()

  const routeChange = () => {
    let path = `/`
    history.push(path)
  }

  const classes = useStyles()

  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = React.useState(existingTokens)

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="regular" className={classes.root}>
          <IconButton  onClick={routeChange} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SvgIcon component={Finn} viewBox="0 0 10 10" fontSize="large" />
            <Typography variant="h5">Companion</Typography>
          </IconButton>

          <ResDrawer />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default BaseNav
