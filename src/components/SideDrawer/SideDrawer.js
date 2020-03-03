import React from 'react'
import './SideDrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = (props) => {

    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = [...drawerClasses, 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to='/user'>Profile</Link></li>
                <li><Link to="/market">Marketplace</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default SideDrawer