import React from 'react'
import ScrollContainer from '../containers/ScrollableContainer.js'
import BuySell from './BuySell.js'

const StockDetail = (props) => {

    return (
    <div className="stock-detail">Stock details: {props.details.symbol}
    <br></br>
    {props.details.purchase_date? "Purchase Date" : null }
    {props.loggedIn? 
    <BuySell buyShare={props.buyShare} sellShare={props.sellShare} stockDetails={props.details}/> :
    null
    }
    <ScrollContainer history={props.history} closeDetails={props.closeDetails}/>
    </div>
    )
}

export default StockDetail 