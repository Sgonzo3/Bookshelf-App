import React from 'react'
import SearchBooksBar from './SearchBooksBar.js'
import SearchBooksResults from './SearchBooksResults.js'

class SearchPage extends React.Component {

	render() {
    	return(
        <div className="search-books">
            <SearchBooksBar searchList={this.props.searchList} querySearcher={this.props.querySearcher}/>
            <SearchBooksResults list={this.props.list} searchList={this.props.searchList} shelfUpdate={this.props.shelfUpdate}/>
        </div>
        )
    }
}

export default SearchPage
