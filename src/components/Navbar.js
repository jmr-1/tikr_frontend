import React from 'react'
import '../css/Navbar.css'
import DrawerToggleButton from './SideDrawer/DrawerToggleButton.js'


class Navbar extends React.Component{

    render(){

        return (
            // <div className="Navbar">
            //     Navbar 
            // </div>

            <header className="toolbar">
                <nav className="toolbar_navigation">
                    <div><DrawerToggleButton click={this.props.drawerClickHandler}/></div>
                    <div className="spacer"></div>
                    <div className="toolbar_logo"><a href="/">TIKR</a></div>
                    <div className="toolbar_navigation_items">
                        <ul>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/login'>Login</a></li>
                            <li><a href='/market'>Marketplace</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Navbar 