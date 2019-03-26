import React from 'react'
import { Link } from 'react-router-dom'

class SearchBooksBar extends React.Component {
  state = {
    input: '',
  }
//takes user input updates component state with value, then passes state to app Component method to query BooksAPI
  handleChange = (event) => {
    this.setState({input: event.target.value}, 
                 () => this.props.querySearcher(this.state.input)
                 )
  }
  
  render() {
    return (
      <div className="search-books-bar" >
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper" >
          <input
             type="text"
             placeholder="Search by title or author"
             value={this.state.input}
             onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default SearchBooksBar
