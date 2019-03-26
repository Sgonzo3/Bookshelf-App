import React from 'react'
import BookshelfChanger from './BookshelfChanger.js'

class Books extends React.Component {
  	state = {
    	foundShelf: ''
    }
	componentDidMount() {
    	let foundBook
		if(this.props.shelf === "" ){foundBook = this.props.list.find(li => li.id === this.props.id)}
		if(foundBook){this.setState({foundShelf: foundBook.shelf})}
    }
		
  render() {
    //correct issue with biography book images not displaying
    let image = "none"
    this.props.bookObject.imageLinks ? image = this.props.bookObject.imageLinks.thumbnail : image = "none"
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+ image +")" }}></div>
          <BookshelfChanger 
			bookObject={this.props.bookObject} 
			id={this.props.id} 
			shelf={this.state.foundShelf || this.props.shelf} 
			method={this.props.method}
			list={this.props.list}
		  />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Books
