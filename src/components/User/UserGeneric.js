import React from 'react'
import SharesContainer from '../../containers/ScrollableContainer.js'


const UserGeneric = (props) => {

    return (
        <div>Generic User Profile:
            <br></br>
            Name: {props.userInfo.name}
            <br></br>
            Organization: {props.userInfo.organization}
            <br></br>
            Shares Owned:
            <br></br>
            <SharesContainer shares={props.userShares}/>
        </div>
    )
}

export default UserGeneric