import React from 'react'


const Stock = (props) => {

    console.log(props)
    return (
        <div>
            Stock info: {props.stockInfo.symbol}
        </div>
    )
}

export default Stock