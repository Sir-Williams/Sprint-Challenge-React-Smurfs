import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from "react-router-dom";

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => this.setState({ smurfs: response.data}));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/smurfs'>Smurf Village</NavLink>
          <NavLink to='/smurf-form'>Add Smurf</NavLink>
        </nav>
        <Route exact path='/smurfs' render={() => <Smurfs smurfs={this.state.smurfs} />} />
        <Route exact path='/smurf-form' render={() => <SmurfForm />} />
      </div>
    );
  }
}

export default App;
