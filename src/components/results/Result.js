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
        type: PropTypes.string,
    };

    render() {
        const { character, gameSeries, amiiboSeries, image, type } = this.props.result;

        if(type === 'Card') return <li></li>;
        if(amiiboSeries === 'Skylanders') return <li></li>;
        return (
            <li>
                <img src={image}/>
                <h2>{character}</h2>
                <p>From {gameSeries}, part of {amiiboSeries} series of amiibo</p>
            </li>
        );
    }

}