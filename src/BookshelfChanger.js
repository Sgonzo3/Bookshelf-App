import React from 'react'

class BookshelfChanger extends React.Component {
    constructor(props) {
  	super(props)

    this.state = {
    	shelf: '',
    }
  }
  
  componentDidMount() {
  	this.setState(
      {shelf: this.props.shelf }
    )
  }
  
  moveShelf = (event) => {
  	this.setState(
      {shelf: event.target.value},
      this.props.method(this.props.bookObject, event.target.value)
    );
  }

  render() {
    return(
      <div className="book-shelf-changer">
        <select value={this.state.shelf || this.props.shelf || "none"} onChange={this.moveShelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookshelfChanger 
