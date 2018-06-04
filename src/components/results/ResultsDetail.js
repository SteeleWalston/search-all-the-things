import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAmiibo } from '../../services/amiiboApi';
import styles from './ResultsDetail.css';

export default class ResultsDetail extends Component {

  static propTypes = {
    amiiboId: PropTypes.string,
    history: PropTypes.object
  };

  state = {
    result: null
  };

  
  componentDidMount() {
    getAmiibo(this.props.amiiboId)
      .then((body) => {
        this.setState({ result: body.amiibo });
      });
  }

  handleBack = event => {
    event.preventDefault();
    this.props.history.goBack();
  };

  render() {
    const { result } = this.state;

    if(result === null) return null;

    const { character, image, gameSeries, amiiboSeries } = result;

    return (
      <section className={styles['result-detail']}>
        <div className="container">
          <h2>{character}</h2>
          <img src={image}/>
          <p>From {gameSeries}, part of {amiiboSeries} series of amiibo</p>
        </div>
      </section>
    );
  }
}