import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BooksCard = ({ book }) => {
    return (<div><div id="bootstrap-overrides" className="card" styles={{ width: "10rem" }}>
        <img className="card-img-top" src={book.thumbnail} alt="Card image cap" />
        <div className="card-body">
            <h6 className="card-title">{book.title}</h6>
            <h6 className="card-subtitle mb-2 text-muted"><span>{book.author}</span></h6>
            <Link className="btn btn-primary" to={{
                pathname: '/details', state: {thumbnail:book.thumbnail,title:book.title,author:book.author,rating:book.rating,description:book.description }
            }} value={book}>View Details</Link>
        </div>

    </div>
    </div>);
};
BooksCard.propTypes = {
    book: PropTypes.object,

};
export default BooksCard;
