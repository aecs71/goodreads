import { Switch, Route } from 'react-router-dom';
import BooksPage from '../booksgridview/BooksPage';//eslint-disable-line import/no-named-as-default
import React from 'react';
import BookDetailView from '../bookdeatil/BookDetailView';
function Main({books}) {
    
  return (
    <main>
      <Switch>
     {/*  <Route exact path="/search/:txt" render={()=><BooksPage books={books}/>}/> */}
        <Route exact path="/details" component={BookDetailView}/>
        <Route exact path="/search/:txt" component={BooksPage}/>
        <Route exact path="/" render={()=><h3 className="nobook">Please search for a book</h3>}/>
      </Switch>
    </main>
  );
}
export default Main;