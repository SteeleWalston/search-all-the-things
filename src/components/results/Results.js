import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
import styles from './Results.css';

export default class Results extends Component {

  static propTypes = {
    results: PropTypes.array
  };

  render() {
    const { results } = this.props;
    return (
      <ul>
        {results.map((result, i) => (
          <Result key={i} result={result}/>
        ))}
      </ul>
    );
  }
}