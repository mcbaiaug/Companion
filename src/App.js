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
import PrivateRouteLogged from './PrivateRouteLogged'
import Spinner from './Spinner'
import history from "./history";

function App() {

  return (
 
      <Router history={history}>
        <div className="App">
          {/* <Nav /> */}
          <Spinner />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route path="/register" component={SignUp} />
            <PrivateRouteLogged path="/login" component={SignIn} /> 
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </div>
      </Router>

  )
}

export default App
