import React from 'react'
import '../css/Navbar.css'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton.js'
import {Link} from 'react-router-dom';


class Navbar extends React.Component{

    constructor(){
        super()
        this.state = {
        }
    }


    componentDidMount(){
    }

    render(){

        return (
            // <div className="Navbar">
            //     Navbar 
            // </div>

            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div><DrawerToggleButton click={this.props.drawerClickHandler}/></div>
                    <div className="spacer"></div>
                    <div className="toolbar_logo"><Link to="/">TIKR</Link></div>
                    <div className="toolbar_navigation_items">
                        <ul>
                            {!this.props.user? 
                            <li><Link to='/login'>Login</Link></li> :
                            <li><Link to='/profile'>Profile</Link></li>
                            }
                            <li><Link to='/market'>Marketplace</Link></li>
                            <li><Link to='/about'>About</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar 