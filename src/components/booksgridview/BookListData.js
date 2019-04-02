import React from 'react';
import BooksCard from './BooksCard';
import PropTypes from 'prop-types';

const BookListData=({books})=>{

return(<tr>
{books.map(book=>{
    return <td  key={book.title}><BooksCard book={book} /></td>;
})}
</tr>);
    };
    BookListData.propTypes={
        books:PropTypes.array,
      
      
        
    };
export default BookListData;