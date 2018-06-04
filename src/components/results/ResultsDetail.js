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

    return (
      <section className={styles['result-detail']}>
        <div className="container">
          <h2>{result.character}</h2>
          <img src={result.image}/>
          <p>From {result.gameSeries}, part of {result.amiiboSeries} series of amiibo</p>
        </div>
      </section>
    );
  }
}