import React from 'react'

const StockHistory = (props) => {

    let {company_id, date, open_price, high_price, low_price, close_price, volume} = props.history
    return (
        <div>
           Date: {date} Opening: {open_price} High price: {high_price} Low price:{low_price} Close price:{close_price} Volume:{volume}
        </div>
    )
}

export default StockHistory