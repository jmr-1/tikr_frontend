import React from 'react'
import Stock from '../Stock.js'
import StockDetail from '../StockDetail.js'


class UserGeneric extends React.Component{

    constructor(){
        super()
        this.state = {
            currentUserShares: null,
            detailedStock: null,
            stockHistorical: null,

        }
    }

    componentDidMount(){
        this.fetchUserShares(this.props.userInfo.id)
    }

    fetchUserShares = (userID=1) => {
        fetch(`http://localhost:3000/shares/${userID}`)
          .then(res => res.json()).then(shares => this.setState({currentUserShares: shares}))
      }


    closeStockDetail = () => {
        this.setState({
            detailedStock: null,
        })
    }

    getStockDetails = (stock) => {

        this.fetchDetailedCompanyInfo(stock.company_id)
        this.setState({
            detailedStock: stock,
        })
    }

    fetchDetailedCompanyInfo = (companyID) => {

        //first 100 prices only. Seeded data somehow has 500 prices for a single stock that doesn't correspond with get fetch results
        fetch(`http://localhost:3000/companies/${companyID}`)
            .then(res => res.json()).then(data => {
                let newData = [...data].slice(0,99)
                this.setState({stockHistorical: newData})
            })
    }

    buyShare = (e, stockDetails) => {
        console.log('Share bought', stockDetails)
        
        fetch('http://localhost:3000/shares/', {
            method: 'POST',
            body: JSON.stringify(stockDetails),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(data => {
            let newCurrentUserShares = [...this.state.currentUserShares]
            newCurrentUserShares.push(data)
            this.setState({
                currentUserShares: newCurrentUserShares
            })
        })


    }

    // below code uses no-cors, use only for development testing
    sellShare = (e, stockDetails) => {
        console.log('Share sold', stockDetails)
        fetch(`http://localhost:3000/sellshare/${stockDetails.id}`, {
            method: 'POST', //should be DELETE, but this is a workaround bandaid. Need to change routes if this is changed.
            headers: {
                "Content-Type" : "application/json",
                // "Access-Control-Allow-Origin" : 'http://localhost:3000', //this isn't doing anything, mode: no-cors is why it passes pre-flight check error
            },
            // mode: 'no-cors', //remember to change for CORS compliance
        })

        let newStockPortfolio = [...this.state.currentUserShares]
        newStockPortfolio = newStockPortfolio.filter(share => share !== stockDetails)

        this.setState({
            currentUserShares: newStockPortfolio
        })
    }

    render(){

        let {name, organization} = this.props.userInfo

        return (
            <div>Profile for User: {name}
                <br></br>
                Organization: {organization}
                <br></br>
                Shares Owned:
                <br></br>
                {(this.state.detailedStock)? <StockDetail details={this.state.detailedStock} history={this.state.stockHistorical} closeDetails={this.closeStockDetail} loggedIn={this.props.loggedIn} buyShare={this.buyShare} sellShare={this.sellShare}/> : null }
                <br></br>
                {this.state.currentUserShares ? this.state.currentUserShares.map(share => <Stock stockInfo={share} key={share.id} details={this.getStockDetails} />) : null }
            </div>
        )
    }
}

export default UserGeneric