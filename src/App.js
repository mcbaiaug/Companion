import React from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </switch>
      </div>
    </Router>

  )
}





export default App;
