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
        // console.log('Marketplace update:', this.state.detailedStock)
        // console.log('Filtered stocks:', this.state.filteredStocks)
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

        //first 100 prices only. Seeded data somehow has 500 prices for a single stock that doesn't correspond with get fetch results
        fetch(`http://localhost:3000/companies/${companyID}`)
            .then(res => res.json()).then(data => {
                let newData = [...data].slice(0,99)
                this.setState({stockHistorical: newData})
            })
    }

    searchHandler = (e) => {

        let searchText = e.target.value
        let filteredResults = this.filterStocks(searchText)
        // console.log('search results for', searchText, ' results:', filteredResults)
        this.setState({
            searchText: searchText,
            filteredStocks: filteredResults,
        })
    }

    closeStockDetail = () => {
        this.setState({
            detailedStock: null,
        })
    }

    filterStocks = (searchText) => {

        let stockCopy = [...this.state.allStocks]
        let filteredStocks = stockCopy.filter(stock => stock.symbol.toLowerCase().includes(searchText.toLowerCase()))  
        return filteredStocks
    }

    buyShare = (e, stockDetails) => {
        console.log('Share bought', stockDetails)
        let currentUser = this.props.currentUser
        console.log('Current user:', currentUser)

        let stockObj = {
            user_id: currentUser.id,
            company_id: stockDetails.id
        }

        fetch('http://localhost:3000/shares/', {
            method: 'POST',
            body: JSON.stringify(stockObj),
            headers: {
                "Content-Type" : "application/json"
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
        })
    }

    sellShare = () => {
        console.log('Share sold')
    }

    render(){

        return (
            <div>Marketplace
            {(this.state.detailedStock)? <StockDetail details={this.state.detailedStock} history={this.state.stockHistorical} closeDetails={this.closeStockDetail} loggedIn={this.props.loggedIn} buyShare={this.buyShare} sellShare={this.sellShare}/> : null }
            <br></br>
            <SearchBar searchText={this.state.searchText} search={this.searchHandler} />
            
            <br></br>
            {(this.state.filteredStocks)? this.state.filteredStocks.map(stock => <Stock stockInfo={stock} key={stock.symbol} details={this.getStockDetails}/>) : null }
            </div>
        )
    }
}

export default Marketplace