import React, { Component } from 'react';

export default class Result extends Component {

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