import axios from 'axios';
import {parseString} from 'xml2js';
function fetchBooks(text,cb){
    var searchTxt=text;//this.props.match.params.txt;
    if(searchTxt){
        let config = {headers: {"X-Requested-With" : "XMLHttpRequest"}};
        axios.get(`http://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=Qggrxb6FSJSv1Ez779K1A&q=${searchTxt}`,config
        ).then(resp=>{
         parseString(resp.data,(err,result)=>{
            console.log(result);
            const gBook= result.GoodreadsResponse.search[0].results[0].work.map(item=>{
                 return {title:item.best_book[0].title[0],author:item.best_book[0].author[0].name[0],thumbnail:item.best_book[0].image_url[0],rating:item.average_rating[0],description:"The description for this book in not availabe in goodreads api"}
             })
             
             cb(gBook);
             console.log(gBook);
            
         });
        }); 
     }
}
export default fetchBooks;