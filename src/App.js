import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Feed from './components/feed/feed'
import Uplift from './components/uplift'
import Protest from './components/protest'
import Action from './components/action'
import NotFound from './components/404'
import Navbar from './components/navbar'
import About from './components/about'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Switch>
        <Route exact path='/'     component={Feed} />
        <Route path='/action'     component={Action} />
        <Route path='/protest'    component={Protest} />
        <Route path='/uplift'     component={Uplift} />
        <Route path='/about'      component={About} />
        <Route                    component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}


export default App