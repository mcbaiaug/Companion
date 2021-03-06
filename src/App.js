import React from 'react'
import './App.css'
import About from './pages/About'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './context/auth'
import { MessageContext } from './context/message'
import { ForecastContext } from './context/forecast'
import { useState } from 'react'
import Dashboard from './pages/Dashboard/Dashboard'

function App(props) {
  const existingTokens = JSON.parse(localStorage.getItem('tokens'))
  const [authTokens, setAuthTokens] = useState(existingTokens)
  const [message, setMessage] = useState(false)
  const [forecast, setForecast] = useState(false)

  const setTokens = (data) => {
    localStorage.setItem('tokens', JSON.stringify(data))
    setAuthTokens(data)
  }

  return (
    <ForecastContext.Provider value={[forecast, setForecast]}>
      <MessageContext.Provider value={[message, setMessage]}>
        <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
          <Router>
            <div className="App">
              {/* <Nav /> */}
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/shop" component={Shop} />
                <Route path="/register" component={SignUp} />
                <Route path="/login" component={SignIn} />
                <PrivateRoute path="/admin" component={Admin} />
                <Route path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </Router>
        </AuthContext.Provider>
      </MessageContext.Provider>
    </ForecastContext.Provider>
  )
}

export default App
