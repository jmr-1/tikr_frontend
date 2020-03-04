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
                {!props.user? 
                    <li><Link to='/login'>Login</Link></li> :
                    <li><Link to='/profile'>Profile</Link></li>
                }
                <li><Link to="/market">Marketplace</Link></li>
                {props.user? <li><Link to='/' onClick={props.logoutHandler}>Logout</Link></li> : null }
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default SideDrawer