import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Result.css';

export default class Result extends Component {

    static propTypes = {
        character: PropTypes.string,
        image: PropTypes.string,
        gameSeries: PropTypes.string,
        amiiboSeries: PropTypes.string,
    };

    render() {
        const { character, gameSeries, amiiboSeries, image } = this.props.result;

        return (
            <li>
                <img src={image}/>
                <h2>{character}</h2>
                <p>From {gameSeries}, part of {amiiboSeries} series of amiibo</p>
            </li>
        );
    }

}