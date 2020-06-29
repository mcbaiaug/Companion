import React from 'react'
import './App.css'
import About from './pages/About'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin'


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
          <Route path="/Admin" component={Admin} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
