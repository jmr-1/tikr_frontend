import React from 'react'

const StockHistory = (props) => {

    let {company_id, date, open_price, high_price, low_price, close_price, volume} = props.history
    return (
        <div>
           Date: {date} Opening: {open_price} High: {high_price} Low:{low_price} Close:{close_price} Volume:{volume}
        </div>
    )
}

export default StockHistory