import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import About from './components/About.js'
import Marketplace from './containers/Marketplace.js'

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      
    }
  }

  componentDidMount(){
  }

  render(){
    return (
      <div className="App">
        App here
        <Navbar />
        <About />
        <Marketplace />
      </div>
    );
  }
}

export default App;
