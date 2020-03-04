import React from 'react'
import StockHistory from '../components/StockHistory.js'
import './ScrollableContainer.css'


export default class ScrollableContainer extends React.Component {

    constructor(){
        super()
        this.state = {
            stockHistorical: null,
        }
    }

    componentDidMount(){

    }

    componentDidUpdate(){

    }

    render(){
        return(
            <div onClick={this.props.closeDetails} className="scrollable-container">Click to close
                {(this.props.history)? this.props.history.map(history => <StockHistory history={history} key={history.id}/>) : null}

            </div>
        )
    }
}