import React from 'react'
import './SideDrawer.css';

const SideDrawer = (props) => {

    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = [...drawerClasses, 'open']
    }
    
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li><a href="/market">Marketplace</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer