import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default class SearchForm extends Component {

  static propTypes = {
    searchTerm: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    current: this.props.searchTerm || ''
  };

  componentWillReceiveProps({ searchTerm }) {
    if(searchTerm !== this.state.current) {
      this.setState({ current: searchTerm || '' });
    }
  }

  handleChange = ({ target }) => {
    this.setState({ current: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.callSearch();
  };

  handleOptionChange = ({ target }) => {
    this.setState({ current: target.value});
  };

  callSearch() {
    const { current } = this.state;
    if(!current) return;
    this.props.onSearch(current);
  }

  render() {
    const { current } = this.state;

    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <label>
        Search for Amiibos: 
        <input value={current} 
            onChange={this.handleChange} 
            name="search" 
        />
        </label>
        <label>
        &nbsp;<button>Here We Go!</button>
        </label>
        <div>
            <input type="radio" id="choice1" name="amiibo-choices" value="amiibo/" onChange={this.handleOptionChange}/>
            <label>All Amiibo</label>

            <input type="radio" id="choice2" name="amiibo-choices" value="amiibo/?character=" onChange={this.handleOptionChange}/>
            <label>By Character</label>

            <input type="radio" id="choice3" name="amiibo-choices" value="amiibo/?gameseries=" onChange={this.handleOptionChange}/>
            <label>By Game Series</label>
        </div>
      </form>
    );
  }
}