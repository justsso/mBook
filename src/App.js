import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from './container/Home/Home';
import Hello from './Hello'
import My from './container/My/My';

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
              <Route exact path="/" component={Home} ></Route>
              <Route exact path="/hello" component={AsyncHello} />
              <Route path='/my' component={AsyncMy}></Route>
          </div>
      </Router>
    );
  }
}

export default App;
