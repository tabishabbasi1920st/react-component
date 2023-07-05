import './index.css'
import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  loginButton = () => {
    console.log('login button clicked')
  }

  render() {
    return (
      <div className="main-bg-container">
        <div className="content-container">
          <Message message="Please Login" />
          <Login onClick={this.loginButton} />
          <Logout />
        </div>
      </div>
    )
  }
}

export default Home
