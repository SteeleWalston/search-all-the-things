import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import styles from './Result.css';

export default class Result extends Component {

    static propTypes = {
      head: PropTypes.string,
      tail: PropTypes.string,
      character: PropTypes.string,
      image: PropTypes.string,
      gameSeries: PropTypes.string,
      amiiboSeries: PropTypes.string,
      type: PropTypes.string,
    };

    render() {
      // false positive in eslint because of destructuring
      // eslint-disable-next-line
      const { character, gameSeries, amiiboSeries, image, type, head, tail } = this.props.result;

      const amiiboId = head + tail;

      if(type === 'Card') return <li></li>;
      if(amiiboSeries === 'Skylanders') return <li></li>;
      return (
        <li>
          <Link to={`/results/${amiiboId}`}>
            <img src={image}/>
            <h2>{character}</h2>
            <p>From {gameSeries}, part of {amiiboSeries} series of amiibo</p>
          </Link>
        </li>
      );
    }

}