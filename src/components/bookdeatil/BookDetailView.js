import React from 'react';
import StarRatings from 'react-star-ratings';

class BookDetailView extends React.Component {
    state = {
        thumbnail: '',
        title: '',
        author: '',
        rating:0,
        description:''
    }
    componentDidMount() {
        const { thumbnail, title, author,rating,description } = this.props.location.state
        this.setState({ thumbnail, title, author,rating,description })
    }
    render() {
        const rate=parseInt(this.state.rating);
        return (<div class="detail-container"><div class="row">
            <div className="col-3">
            
            <img className='coverImg' src={this.state.thumbnail}  />
            
            </div>
            <div className="col-8">
            <h4>{this.state.title}</h4>
            <div className="author-container">
           <h6>by&nbsp;</h6> <h6>{this.state.author}</h6></div>
           <StarRatings
          rating={rate}
          starRatedColor="red"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
          starDimension="20px"
          starSpacing="2px"
        /><br/>
        <h6 className="descp">{this.state.description}</h6>
             </div>
            
        </div></div>)
    }
}
export default BookDetailView;