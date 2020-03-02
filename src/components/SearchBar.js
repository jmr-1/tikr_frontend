import React from 'react'


const SearchBar = (props) => {

    return (
        <div>
            <form>
                <label>Search Bar</label>
                <input type="text" placeholder="Search Stocks.." onChange={(e) => {props.search(e)}} value={props.searchText}></input>
                
            </form>
        </div>
    )
}

export default SearchBar