import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import MainPage from './Main.js'
import SearchPage from './SearchPage.js'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    	list: [],
    	searchList: [],
    	updaterList: [],
  }
// takes in arguments from bookshelfChanger component, sends to BooksAPI to save user changes, then updates state with list
 shelfUpdate = (bookToChange, shelfToChangeTo) => {
  	BooksAPI.update(bookToChange, shelfToChangeTo)
    .then(resp => this.setState( {updaterList: resp} ) )
    .catch(resp => console.log(resp))
  }
// takes input from SearchBar component, sends to BooksAPI to request list of matching books, then updates state with list
querySearcher = (query) => {
  	query === '' ? this.setState( {searchList: [], }) :
	BooksAPI.search(query, 20)
		.then(resp =>
              //console.log(resp)
              this.setState( {searchList: resp})
             )
  		.catch(resp =>
               this.setState( {searchList: [], })
              )
}
  render() {
    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + '/'} render={() => (<MainPage list={this.state.list} updaterList={this.state.updaterList} shelfUpdate={this.shelfUpdate} />) }/>
    	<Route path={process.env.PUBLIC_URL + '/Search'} render={() => (<SearchPage list={this.state.list} searchList={this.state.searchList} updaterList={this.state.updaterList} shelfUpdate={this.shelfUpdate} querySearcher={this.querySearcher} />)}/>
      </div>
    )
  }
}

export default BooksApp
