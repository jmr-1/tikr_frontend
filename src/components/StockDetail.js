import React from 'react'

const StockDetail = (props) => {

    console.log('stock details props:', props.details)
    return (
    <div>Stock details: {props.details.symbol}</div>
    )
}

export default StockDetail 