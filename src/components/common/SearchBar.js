import React from 'react';
import{Link} from 'react-router-dom';
class SearchBar extends React.Component{

   constructor(props){
       super(props)
       this.state={
           term:'',
           value:''
       }
       this.handleChange=this.handleChange.bind(this);
   }
   handleChange(e){
    this.setState({value:e.target.value})
   }
         
     render(){
     return(<div><div className="form-inline my-2 my-lg-0" >
     <input className="form-control mr-sm-2" type="search" placeholder="Enter Author or Title" aria-label="Search" name="search" value={this.state.value} onChange={this.handleChange}/>
     {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to={`/search/${this.state.value}`}>Search</Link></button> */}
     <Link to={`/search/${this.state.value}`}>Search</Link>
        
   </div>
   
   </div>
   );}
 };

 export default SearchBar;