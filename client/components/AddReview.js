import React, { Component } from 'react';
import Rating from 'react-rating';
import { connect } from 'react-redux';
import { postReview } from '../store/reducers/productReducer';

//*-----------------     Default state     -----------------*/
const defaultState = {
  rating: 0,
  content: '',
};

//*-----------------     CLASS COMPONENT     -----------------*/

class AddReview extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //*-----------------     Event Handlers     -----------------*/
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleRating(evt) {
    this.setState({
      rating: Number(evt),
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const { product } = this.props;
    this.props.postReview(product.id, {
      rating: this.state.rating,
      content: this.state.content,
    });
    this.setState(defaultState);
  }

  //*-----------------     Render     -----------------*/
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Rating
            value={this.state.rating}
            placeholderRating={2.5}
            placeholderSymbol={
              <img src="/img/softdrinks-initial.png" className="icon" />
            }
            emptySymbol={
              <img src="/img/softdrinks-empty.png" className="icon" />
            }
            fullSymbol={<img src="/img/softdrinks-full.png" className="icon" />}
            {...this.props}
            initialRating={this.state.rating}
            onChange={this.handleRating}
          />
          <label>
            Your Review:
            <br />
            <textarea
              className="w-100 p-3"
              onChange={this.handleChange}
              value={this.state.content}
              name="content"
              type="text"
              placeholder="tell us what you think..."
            />
          </label>
          <button
            className="edit-product"
            disabled={!this.state.content || !this.state.rating}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

//*-----------------     MAPPING TO STORE     -----------------*/
const mapState = state => {
  return {
    reviews: state.reviews,
  };
};

const mapDispatch = dispatch => {
  return {
    postReview: (id, review) => {
      dispatch(postReview(id, review));
    },
  };
};
export default connect(
  mapState,
  mapDispatch
)(AddReview);
