import React, {Component} from 'react';
import './App.css';
import PCIndex from './components/PCIndex';
import MobileIndex from './components/MobileIndex'
import MediaQuery from 'react-responsive'
import PCNewsDetails from './components/PCNewsDetails'
import {Route} from 'react-router';
import MobileNewsDetails from './components/MobileNewsDetails';
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <div>
            <Route path="/" exact={true} component={PCIndex}></Route>
            <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <div>
            <Route path="/" exact={true} component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
          </div>
        </MediaQuery>
      </div>
    )
  }
}
export default App;