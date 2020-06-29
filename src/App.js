import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import Feed from './components/feed/feed'
import Upliftment from './components/upliftment'
import Protests from './components/protests'
import DemandChange from './components/change'
import NotFound from './components/404'


export class App extends Component {

  render() {
    const pages = (
      <Switch>
        <Route exact path='/'     component={Feed} />
        <Route path='/upliftment' component={Upliftment} />
        <Route path='/protests'   component={Protests} />
        <Route path='/change'     component={DemandChange} />
        <Route                    component={NotFound} />
      </Switch>
    )

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          {pages} <br/>
          <Link to={'/'}>Feed</Link> <br/>
          <Link to={'/upliftment'}>Upliftment</Link> <br/>
          <Link to={'/protests'}>Protests</Link> <br/>
          <Link to={'/change'}>Change</Link> <br/>
        </div>
      </BrowserRouter>
      
    )
  }
}

export default App
