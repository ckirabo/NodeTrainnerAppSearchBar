import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import LinkOne from './LinkOne.js';
import LinkTwo from './LinkTwo.js';
import './trainers.css'

class App extends Component {

    constructor() {
        super();
        this.state = {
            linkOne: "DashBoard",
            linkTwo: "Trainers"
        }

    }
    render() {
        return (
     <div>

     <Router> 
     <div class="navigation"> 
     <h1 id="logo"> Logo </h1>


     <ul>
     <Link to ="/">{this.state.linkOne}</Link> 
     <Link to ="/Trainers">{this.state.linkTwo}</Link>
     </ul>
      <Route exact path="/" component={LinkOne} />
      <Route exact path="/Trainers" component={LinkTwo} />
      </div>
     </Router>
      
     </div>
        )
    }
}

export default App;