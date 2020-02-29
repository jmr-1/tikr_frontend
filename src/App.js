import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Marketplace from './containers/Marketplace.js';
import Login from './components/Login.js';
import LandingPage from './components/LandingPage.js'
import {Route} from 'react-router-dom';


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
        <Navbar />
        <main style={{marginTop: '64px'}}>
        <Route exact path='/' render={() => <LandingPage />}/>
        <Route exact path='/login' render={() => <Login />}/>
        <Route exact path='/about' render={() => <About />}/>
        <Route exact path='/market' render={() => <Marketplace />}/>
        
        </main>
      </div>
    );
  }
}

export default App;
