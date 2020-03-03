import React from 'react'
import StockHistory from '../components/StockHistory.js'


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

    // fetchDetailedCompanyInfo = (companyID) => {

    //     //first 100 prices only. Seeded data somehow has 500 prices for a single stock that doesn't correspond with get fetch results
    //     fetch(`http://localhost:3000/companies/${companyID}`)
    //         .then(res => res.json()).then(data => {
    //             let newData = [...data].slice(0,99)
    //             this.setState({stockHistorical: newData})
    //         })
    // }

    render(){
        return(
            <div onClick={this.props.closeDetails}>Click to close
                {(this.props.history)? this.props.history.map(history => <StockHistory history={history} key={history.id}/>) : null}

            </div>
        )
    }
}