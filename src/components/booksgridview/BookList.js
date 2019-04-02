import React from 'react';
import BookListData from './BookListData';

const BookList=({books})=>{
    const createRow=(books)=>{
     // books=Object.values(books);
        if(!books)
        return;
        let dataPoint=0;
        let rows=[];
      for(let i=0;i<=books.length/3;i++){
        let booksArray=[];
        for(let j=0;j<3 ;j++){
            if(dataPoint<books.length)
              booksArray.push(books[dataPoint++]);
           
        }
        rows.push(<BookListData key={i} books={booksArray}/>);
            
      }
      return rows;
    };
return(<table className="table">
<tbody>
{createRow(books)}
</tbody>
</table>);
};
export default BookList;