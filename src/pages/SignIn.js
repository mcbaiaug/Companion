import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import axios from 'axios'
import BaseNav from '../components/BaseNav'
import { useAuth } from '../context/auth'
import { Redirect } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignUp(props) {
  const classes = useStyles()
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [isError, setIsError] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { setAuthTokens } = useAuth()
  const referer = '/' || props.location.state.referer

  function Copyright() {
    return (
      <Typography variant="body1" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Companion
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }

  function postLogin() {
    axios
      .post('https://www.somePlace.com/auth/login', {
        userName,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setAuthTokens(result.data)
          setLoggedIn(true)
        } else {
          setIsError(true)
        }
      })
      .catch((e) => {
        setIsError(true)
      })
  }

  if (isLoggedIn) {
    localStorage.setItem('tokens', JSON.stringify(userName))

    return <Redirect to={referer} />
  }

  return (
    <React.Fragment>
      <BaseNav />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography  variant="h4">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={userName}
                  autoComplete="email"
                  color="secondary"
                  onChange={(e) => {
                    setUserName(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  value={password}
                  id="password"
                  autoComplete="current-password"
                  color="secondary"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              onClick={() => {
                setLoggedIn(true)
                postLogin()
              }}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Link href="/register" variant="body1" color="secondary">
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  )
}
