import React from 'react';
import './App.css';
import Navbar from './Components/navbar/Navbar';
import Section from './Components/section/Section'; 

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Section/>
      </div>
    )
  }
}

export default App;
