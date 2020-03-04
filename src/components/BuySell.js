import React from 'react'


const BuySell = (props) => {

    // console.log('buysell props', props)
    return (
        <div>
            <button onClick={(e)=>props.buyShare(e, props.stockDetails)}>Buy Share</button>
            <button onClick={(e)=>props.sellShare(e, props.stockDetails)}>Sell Share</button>
        </div>
    )
}

export default BuySell