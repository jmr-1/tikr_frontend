import React from 'react'
import StockHistory from './StockHistory.js'
import ScrollContainer from '../containers/ScrollableContainer.js'

const StockDetail = (props) => {

    // console.log('stock details props:', props.details)
    return (
    <div className="stock-detail">Stock details: {props.details.symbol}
    <p>Place buy option here if logged in: </p>
    <button>Buy</button><button>Sell</button>
    <ScrollContainer history={props.history} closeDetails={props.closeDetails}/>
    </div>
    )
}

export default StockDetail 