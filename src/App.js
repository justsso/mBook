import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from './container/Home/Home';
import Login from './container/Login/Login'
import Hello from './Hello'
import My from './container/My/My';
import Index from './container/Index/Index';

import LoadingComponent from './MyLoading';



const AsyncHello = Loadable({
    loader: () => import('./Hello'),
    loading: LoadingComponent
})


const AsyncMy = Loadable({
    loader: () => import('./container/My/My'),
    loading: LoadingComponent
})

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <Route path='/' component = {Index} exact ></Route>
              {/*<Route exact path="/" component={Home} ></Route>*/}
              <Route exact path="/login" component={Login} />
              <Route path='/my' component={AsyncMy}></Route>
              <Route path='' ></Route>
          </div>
      </Router>
    );
  }
}

export default App;
