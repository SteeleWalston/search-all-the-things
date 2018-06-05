import React, { Component } from 'react';
import Results from '../results/Results';
import SearchForm from '../search/SearchForm';
import { search } from '../../services/amiiboApi';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import styles from './Search.css';

const getSearch = location => location ? location.search : '';

export default class Search extends Component {
  
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  state = {
    results: null,
    error: null,
    searchTerm: ''
  };

  componentDidMount() {
    this.searchFromQuery(this.props.location.search);
  }

  UNSAFE_componentWillReceiveProps({ location }) {
    const next = getSearch(location);
    const current = getSearch(this.props.location);
    if(current === next) return;
    this.searchFromQuery(next);
  }
  
  searchFromQuery(query) {
    const { search: searchTerm } = queryString.parse(query);
    this.setState({ searchTerm });
    if(!searchTerm) return;

    search(searchTerm)
      .then((body) => {
        this.setState({ results: body.amiibo });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  handleSearch = searchTerm => {
    this.setState({ error: null });
    
    this.props.history.push({
      search: searchTerm ? queryString.stringify({ search: searchTerm }) : ''
    });
  };
  
  render() {
    const { results, error, searchTerm } = this.state;

    return (
      <div className={styles.search}>
        <SearchForm searchTerm={searchTerm} onSearch={this.handleSearch}/>
        {error && <div>Whoops! Looks like your search is not quite right. Check your spelling or search for something else</div>}
        {(!error && results) && <Results results={results}/>}
      </div>
    );
  }
}