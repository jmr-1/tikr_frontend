import React from 'react'
import Stock from '../components/Stock.js'

class Marketplace extends React.Component{

    constructor(){
        super()
        this.state = {
            allStocks: null,
        }
    }

    componentDidMount(){

        this.fetchCompanies()
    }

    fetchCompanies = () => {

        fetch('http://localhost:3000/companies/')
          .then(res => res.json()).then(data => this.setState({allStocks: data}))
    }

    render(){
        return (
            <div>Marketplace

            {(this.state.allStocks)? this.state.allStocks.map(stock => <Stock stockInfo={stock} key={stock.symbol}/>) : null }
            </div>
        )
    }
}

export default Marketplace