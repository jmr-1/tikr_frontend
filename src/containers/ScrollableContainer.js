import React from 'react'
import StockHistory from '../components/StockHistory.js'


export default class ScrollableContainer extends React.Component {

    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div onClick={this.props.closeDetails}>Click to close
                {(this.props.shares)? this.props.shares.map(history => <StockHistory history={history} key={history.id}/>) : null}

            </div>
        )
    }
}