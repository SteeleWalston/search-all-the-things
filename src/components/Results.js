import React, { Component } from 'react';
import Result from './Result';

export default class Results extends Component {

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