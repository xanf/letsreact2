import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton, Counter, Rating } from 'components';
import { increment } from 'redux/modules/counter';
import { load as loadRating } from 'redux/modules/rating';
import { connect } from 'react-redux';
import config from '../../config';
import connectData from 'helpers/connectData';

function fetchData(getState, dispatch) {
  return dispatch(loadRating());
}

@connectData(fetchData)
@connect(
  state => (
    {
      counter: state.counter.count,
      rating: state.rating.data.records,
    }
  ),
  {increment}
)
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
  };

  render() {
    const { rating } = this.props;
    return (
      <div>
        <h1>Rating</h1>
        <Rating list={rating} />
      </div>
    );
  }
}
