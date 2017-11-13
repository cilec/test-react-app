import React, {Component} from 'react';
import {Button} from 'antd';
import './App.css';
import PCIndex from './components/PCIndex';
import MobileIndex from './components/MobileIndex'
import MediaQuery from 'react-responsive'
class App extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width:1224px)">
          <PCIndex></PCIndex>
        </MediaQuery>
        <MediaQuery query="(max-device-width:1224px)">
          <MobileIndex/>
        </MediaQuery>
      </div>
    )
  }
}
export default App;