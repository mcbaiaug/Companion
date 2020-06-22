import React from 'react'
import { Button, AppBar, Typography, Toolbar, IconButton, SvgIcon} from '@material-ui/core'
import { ReactComponent as Finn } from './finn.svg'
import { makeStyles } from '@material-ui/core/styles'
import ResDrawer from './ResDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between',
  
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
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

}))

function Nav() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar variant="regular" className={classes.root}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <SvgIcon component={Finn} viewBox="0 0 10 10" fontSize="large" />
            <Typography variant="h5">Companion</Typography>
          </IconButton>
          <div className={classes.title}>
            <Button color="inherit">Finn</Button>
            <Button color="inherit">Asa</Button>
            <Button color="inherit">Doug</Button>
          </div>
          <div className={classes.login}>
            <Button color="secondary">Login</Button>
            <Button color="secondary">Register</Button>
          </div>
          <ResDrawer />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
