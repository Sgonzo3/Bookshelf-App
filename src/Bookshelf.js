import React from 'react'
import Books from './Books.js'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends React.Component {
  constructor(props) {
  	super(props)

    this.state = {
    	list: [],
      	newShelf: '',
    }
  }
  //request user's books list from BooksAPI, filters results for particular shelf and sets state
  getBooks = () => {
  	BooksAPI.getAll().then(resp => {
     this.setState({list: resp.filter( (index) => index.shelf === this.props.altName )})
    });
  }
  
  componentDidMount() {
    this.getBooks()
  }
// if changes are made to updater list, requests books list from BooksAPI
  componentDidUpdate(prevProps) {
  if (this.props.updaterList !== prevProps.updaterList) {
    this.getBooks()
  }
}
   render() {
     let shelfUpdate = this.props.shelfUpdate;
     let bookObject;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
{this.state.list.map(
 	function(book) {
      	bookObject = book;
		return(
      <li key={book.id} >
		<Books 
			bookObject={bookObject} 
			method={shelfUpdate} 
			key={book.id} 
			list={[]}
			id={book.id} 
			title={book.title} 
			authors={book.authors || "N/A"} 
			URL={
              book.imageLinks.thumbnail
            } 
			shelf={book.shelf}
		/>
	  </li>
	 )
    }
 )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf
