import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Result from './Result';
// import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './Results.css';

export default class Results extends Component {

  static propTypes = {
    results: PropTypes.array
  };

  render() {
    const { results } = this.props;
    return (
      <ul className={styles.results}>
        {results.map((result, i) => (
          <Result key={i} result={result}/>
        ))}
      </ul>
    );
  }
}