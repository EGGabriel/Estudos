import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home'
import NewSeries from './NewSeries'
import Series from './Series'
//functional-statless component
const About = () => <section className="intro-section"><h1>Sobre</h1></section>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">
                <div className="navbar-header page-scroll">
                  <a className="navbar-brand page-scroll" href="#page-top">
                    <img src="images/Logoeg.png" height="50" />
                  </a>
                </div>
                <div className="collapse navbar-collapse navbar-ex1-collapse">
                  <ul className="nav navbar-nav">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/new">Nova Série</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <Route exact path='/' component={Home} />
          <Route exact path='/series/:genre' component={Series} />
          <Route exact path='/new' component={NewSeries} />
          <Route exact path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App