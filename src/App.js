import React, { Component } from 'react';
import NavBar from './components/navbar_component/Navbar';
import './App.css';
import { Config as config } from './env/Config';

export class App extends Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
  }

  componentDidMount() {
    this.init();
  }

  init = () => {
    console.log(config.api_key);
  }

  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
      </div>
    );
  }
}

export default App;
