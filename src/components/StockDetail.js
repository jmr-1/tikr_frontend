import React from 'react'
import StockHistory from './StockHistory.js'
import ScrollContainer from '../containers/ScrollableContainer.js'

const StockDetail = (props) => {

    console.log('stock details props:', props.details)
    return (
    <div className="stock-detail" onClick={props.closeDetails}>Stock details: {props.details.symbol}
    <p>Place buy option here if logged in: </p>
    <button>Buy</button><button>Sell</button>
    <ScrollContainer />
    {(props.history)? props.history.map(history => <StockHistory history={history} key={history.id}/>): null}
    </div>
    )
}

export default StockDetail 