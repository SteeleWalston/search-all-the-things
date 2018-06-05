import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Result.css';

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

      if(type === 'Card') return null;
      if(amiiboSeries === 'Skylanders') return null;
      return (
        <li className={styles.result}>
          <Link to={`/results/${amiiboId}`} style={{ textDecoration: 'none' }}>
            <img src={image}/>
            <h2>{character}</h2>
          </Link>
        </li>
      );
    }

}