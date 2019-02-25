import React, { Component } from 'react'
import store from './store'
import { Provider } from 'react-redux'

import Admin from './pages/Admin'
import Home from './pages/Home'
import Restrito from './pages/Restrito'
import Login from './pages/Login'

import { Container } from 'semantic-ui-react'

import { Route, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <Router>
            <Container>
              <Route exact path='/home' component={Home} />
              <Route path='/admin' component={Admin} />
              <Route path='/restrito' component={Restrito} />
              <Route path='/' component={Login} />
            </Container>
          </Router>
      </Provider>
    );
  }
}

export default App;
