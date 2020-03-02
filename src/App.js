import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Marketplace from './containers/Marketplace.js';
import Login from './components/Login.js';
import LandingPage from './components/LandingPage.js'
import {Route} from 'react-router-dom';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import Backdrop from './components/Backdrop/Backdrop.js'
import UserGeneric from './components/User/UserGeneric.js'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      sideDrawerOpen: false,
    }
  }

  componentDidMount(){

  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  render(){

    let backdrop;
    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop clickHandler={this.backdropClickHandler}/>
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
        <Route exact path='/user' render={() => <UserGeneric />} /> 
        <Route exact path='/login' render={() => <Login />}/>
        <Route exact path='/about' render={() => <About />}/>
        <Route path='/market' render={() => <Marketplace />}/>
        <Route exact path='/' render={() => <LandingPage />}/>
        
        
        </main>
      </div>
    );
  }
}

export default App;
