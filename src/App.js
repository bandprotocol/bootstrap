import React from 'react'
import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LandingPage from 'pages/Landing'
import NotFoundPage from 'pages/404'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/" component={NotFoundPage} />
    </Switch>
  </Router>
)
