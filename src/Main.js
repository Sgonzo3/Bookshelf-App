import React from 'react'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf.js'

class MainPage extends React.Component {
  render() {   
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf list={this.props.list} updaterList={this.props.updaterList} shelfUpdate={this.props.shelfUpdate} name="Currently Reading" altName="currentlyReading"/>
            <Bookshelf list={this.props.list} updaterList={this.props.updaterList} shelfUpdate={this.props.shelfUpdate} name="Want to Read" altName="wantToRead"/>
            <Bookshelf list={this.props.list} updaterList={this.props.updaterList} shelfUpdate={this.props.shelfUpdate} name="Read" altName="read"/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/Search" className="search-bar-link">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage
