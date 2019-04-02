import React from 'react';
import BookList from './BookList';
import axios from 'axios'

import fetchBooks from '../../service/fetchBooks';
class BooksPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books:[]
        }
    }
    componentWillReceiveProps(newProps){
        var searchTxt=newProps.match.params.txt;
        fetchBooks(searchTxt,(books)=>{
            this.setState({books:books});
        });
    }
   componentDidMount(){
    var searchTxt=this.props.match.params.txt;
    fetchBooks(searchTxt,(books)=>{
        this.setState({books:books});
    });
   }
    render(){if(!this.state.books.length)
                return(<div className="nobook"><h3>Loading...</h3></div>)
        return(
        <div className="row">
        
        <BookList books={this.state.books} /> 
        </div>)
    }
}
export default BooksPage