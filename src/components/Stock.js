import React from 'react'
import {Link} from 'react-router-dom';

const Stock = (props) => {

    return (
        <div>
            <Link to={`/market/stocks/${props.stockInfo.id}`}>
            <div onClick={e=>{props.details(props.stockInfo)}}>
            Stock info: {props.stockInfo.symbol}
            </div>
            </Link>
        </div>
    )
}

export default Stock