import React, { Component } from 'react';
import './App.css';

//Components
import Navbar from './components/Navbar';
import FormField from './components/FormField';
import CoolButton from './components/CoolButton';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />  
          <CoolButton is-small is-danger className="is-rounded my-class">Button 1</CoolButton>
          <CoolButton is-small is-success>Button 2</CoolButton>
          {/* <Signup/> */}
        </div>
      </div>
    );
  }
}

export default App;
