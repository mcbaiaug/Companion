import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { CssBaseline } from '@material-ui/core'
import './fonts/PixelMaster.ttf'
import { createStore } from 'redux'
import allReducers from './reducers'
import { Provider } from 'react-redux'

//Store-> Globalized State
const store = createStore(allReducers)

//Action

//Reducer

//Dispatch

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
