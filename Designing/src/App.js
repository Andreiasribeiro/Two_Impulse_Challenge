import React from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Homepage from "./homepage/homepage"
import Employee from "./employee/employee"
import Team from "./team/team"


function App() {
  return (
    <div className="App">
  
  <Router>
    <Switch>
    
       
       <Route exact path='/' component={Homepage} />
       <Route exact path='/emp' component={Employee} />
       <Route exact path='/team' component={Team} />
      
      
      
       
    </Switch>


</Router>

</div>
  );
}

export default App;
