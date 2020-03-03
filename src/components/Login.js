import React from 'react'


class Login extends React.Component{

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
    }
  }

  changeField = (e, key) => {
    let newValue = e.target.value
    this.setState({ [key]: newValue })
  }

  render(){
    return (
        <div className="login">
          <form onSubmit={(e) => this.props.login(e, this.state.username, this.state.password)}>
            <div>
              <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.changeField(e, 'username')} />
              <label htmlFor="username">Username</label>
            </div>
            <div>
              <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.changeField(e, 'password')}/>
              <label htmlFor="password">Password</label>
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
      );
  }
}

export default Login