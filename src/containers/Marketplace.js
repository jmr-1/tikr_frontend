import React from 'react'
import Stock from '../components/Stock.js'
import StockDetail from '../components/StockDetail.js'

class Marketplace extends React.Component{

    constructor(){
        super()
        this.state = {
            allStocks: null,
            detailedStock: null,
        }
    }

    componentDidMount(){

        this.fetchCompanies()
    }

    fetchCompanies = () => {

        fetch('http://localhost:3000/companies/')
          .then(res => res.json()).then(data => this.setState({allStocks: data}))
    }

    getStockDetails = (stock) => {

        this.setState({
            detailedStock: stock,
        })
    }



    render(){

        return (
            <div>Marketplace
            {(this.state.detailedStock)? <StockDetail details={this.state.detailedStock}/> : null }
            <br></br>
            {(this.state.allStocks)? this.state.allStocks.map(stock => <Stock stockInfo={stock} key={stock.symbol} details={this.getStockDetails}/>) : null }
            </div>
        )
    }
}

export default Marketplace