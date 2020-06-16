import React from 'react'
import './App.css'
import Nav from './components/Nav'
import About from './pages/About'
import Shop from './pages/Shop'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </switch>
      </div>
    </Router>

  )
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)



export default App;
