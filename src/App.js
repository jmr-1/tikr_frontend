import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Marketplace from './containers/Marketplace.js';
import Login from './components/Login.js';
import LandingPage from './components/LandingPage.js'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom';
import SideDrawer from './components/SideDrawer/SideDrawer.js'
import Backdrop from './components/Backdrop/Backdrop.js'
import UserGeneric from './components/User/UserGeneric.js'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      sideDrawerOpen: false,
      currentUser: null,
      currentUserShares: []
    }
  }

  componentDidMount(){
  }

  fetchUserInfo = (userID=1) => {
    fetch(`http://localhost:3000/users/${userID}`)
      .then(res=>res.json()).then(user => this.setState({currentUser: user}))
  }

  fetchUserShares = (userID=1) => {
    fetch(`http://localhost:3000/shares/${userID}`)
      .then(res => res.json()).then(shares => this.setState({currentUserShares: shares}))
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

  changeCurrentUser = (e, username, password) => {
    e.preventDefault()
    console.log('login form: ', username, 'password:', password)

    fetch('http://localhost:3000/auth/login/', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    }).then(res => res.json()).then(user => {
      console.log(user)
      if(user.found){
        this.setState({
          currentUser: user.user,
        })
      }
    })
  }

  

  render(){

    let backdrop;
    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop clickHandler={this.backdropClickHandler}/>
    }

    return (
      <div className="App" style={{height: '100%'}}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} user={this.state.currentUser}/>
        <SideDrawer show={this.state.sideDrawerOpen} user={this.state.currentUser}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <Switch>
            <Route exact path='/profile' render={() => {
              return this.state.currentUser? 
              <UserGeneric userInfo={this.state.currentUser} userShares={this.state.currentUserShares}/> :
              <Redirect to='/login' />
            }}/> 
            <Route exact path='/login' render={() => {
              return !this.state.currentUser? <Login login={this.changeCurrentUser}/> :
              <Redirect to='/profile' />
            }}/>
            <Route exact path='/about' render={() => <About />}/>
            <Route path='/market' render={() => <Marketplace />}/>
            <Route exact path='/' render={() => <LandingPage />}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(App);
