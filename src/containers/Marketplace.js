import React from 'react'
import Stock from '../components/Stock.js'
import StockDetail from '../components/StockDetail.js'
import SearchBar from '../components/SearchBar.js'

class Marketplace extends React.Component{

    constructor(){
        super()
        this.state = {
            allStocks: [],
            detailedStock: null,
            stockHistorical: null,
            searchText: '',
            filteredStocks: [],
        }
    }

    componentDidMount(){

        this.fetchCompanies()
    }

    componentDidUpdate(){
        console.log('Marketplace update:', this.state.detailedStock)
        console.log('Filtered stocks:', this.state.filteredStocks)
    }

    fetchCompanies = () => {

        fetch('http://localhost:3000/companies/')
          .then(res => res.json()).then(data => this.setState({allStocks: data, filteredStocks: data}))
    }

    getStockDetails = (stock) => {

        this.fetchDetailedCompanyInfo(stock.id)
        this.setState({
            detailedStock: stock,
        })
    }

    fetchDetailedCompanyInfo = (companyID) => {

        fetch(`http://localhost:3000/companies/${companyID}`)
            .then(res => res.json()).then(data => this.setState({stockHistorical: data}))
    }

    searchHandler = (e) => {

        let searchText = e.target.value
        let filteredResults = this.filterStocks(searchText)
        console.log('search results for', searchText, ' results:', filteredResults)
        this.setState({
            filteredStocks: filteredResults,
        })
    }

    closeStockDetail = () => {
        this.setState({
            detailedStock: null,
        })
    }

    filterStocks = (searchText) => {

        let filteredStocks = [...this.state.allStocks]
        filteredStocks.filter(stock => {
            debugger
            return stock.symbol.includes(searchText)})
        return filteredStocks 
    }



    render(){

        return (
            <div>Marketplace
            {(this.state.detailedStock)? <StockDetail details={this.state.detailedStock} history={this.state.stockHistorical} closeDetails={this.closeStockDetail}/> : null }
            <br></br>
            <SearchBar search={this.searchHandler}/>
            <br></br>
            {(this.state.filteredStocks)? this.state.filteredStocks.map(stock => <Stock stockInfo={stock} key={stock.symbol} details={this.getStockDetails}/>) : null }
            </div>
        )
    }
}

export default Marketplace