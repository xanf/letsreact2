import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { CounterButton, GithubButton, Counter } from 'components';
import { increment } from 'redux/modules/counter';
import { connect } from 'react-redux';
import config from '../../config';

@connect(
  state => ({counter: state.counter.count}),
  {increment}
)
export default class Home extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
  };

  render() {
  }
}
