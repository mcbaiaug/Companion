import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, SvgIcon } from '@material-ui/core'
import { ReactComponent as Finn } from './finn.svg'
import { makeStyles } from '@material-ui/core/styles'
import ResDrawer from './ResDrawer'
import { Link } from 'react-router-dom'

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
  buttonScale: {
    fontSize: '2rem'
  },
}))

function Nav() {
  const classes = useStyles()

  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = React.useState(existingTokens)

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="regular" className={classes.root}>
          <IconButton edge="end" className={classes.menuButton} color="inherit"  disableRipple aria-label="menu">
            <SvgIcon component={Finn} viewBox="0 0 10 10" fontSize="large" />
            <Typography variant="h4">Companion</Typography>
          </IconButton>
          <div className={classes.title}>
            <Button className={classes.buttonScale} color="inherit">Finn</Button>
            <Button className={classes.buttonScale} color="inherit">Asa</Button>
            <Button className={classes.buttonScale} color="inherit">Doug</Button>
          </div>
          {authTokens ? (
            <div className={classes.login}>
                <Button className={classes.buttonScale} onClick={() => {
                  console.log('aaaa')
                  localStorage.removeItem('tokens')
                  setAuthTokens(null)} }color="secondary">Logout</Button>
            </div>
          ) : (
            <div className={classes.login}>
              <Link className={classes.link} to="/login">
                <Button className={classes.buttonScale} color="secondary">Login</Button>
              </Link>
              <Link className={classes.link} to="/register">
                <Button className={classes.buttonScale} color="secondary">Register</Button>
              </Link>
            </div>
          )}
          <ResDrawer />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
