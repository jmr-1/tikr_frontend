import React from 'react'


const Stock = (props) => {

    console.log(props)
    return (
        <div onClick={e=>{props.details(props.stockInfo)}}>
            Stock info: {props.stockInfo.symbol}
        </div>
    )
}

export default Stock