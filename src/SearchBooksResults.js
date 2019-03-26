import React from 'react'
import Books from './Books.js'
import * as BooksAPI from './BooksAPI'
	
class SearchBooksResults extends React.Component {
  state = {    
    allBooks:[]
  }
	componentDidMount() {
    	BooksAPI.getAll()
		.then(resp => this.setState({allBooks: resp}) )
    }
  render() {
    let shelfUpdate = this.props.shelfUpdate;
    let list = this.state.allBooks
    let bookObject
    return(
      <div className="search-books-results">
        <ol className="books-grid">
      {this.props.searchList.map(
 	function(book) {
      	bookObject = book;
		return(
      <li key={book.id} >
		<Books 
			bookObject={bookObject} 
			method={shelfUpdate} 
			key={book.id} 
			id={book.id} 
			title={book.title} 
			authors={book.authors || "N/A"} 
			shelf={''}
    		list={list}
		/>
	  </li>
	 )
    }
 )}
      	</ol>
      </div>
    )
  }
}

export default SearchBooksResults
