import React from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import Main from './router/Main';
import axios from 'axios';
import {parseString} from 'xml2js';
import BooksPage from './booksgridview/BooksPage';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books:[]
        }
       
    }
   
    render(){
    return(<div className="container">
                 <Header handleSubmit={this.handleSubmit}/>
                <Main books={this.state.books}/>
               
    </div>);
    }

};

export default App;













