import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.css';

export default class SearchForm extends Component {

  static propTypes = {
    searchTerm: PropTypes.string,
    onSearch: PropTypes.func.isRequired
  };

  state = {
    current: '',
    prefix: '',
    input: ''
  };

  handleChange = ({ target }) => {
    this.setState({ current: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.callSearch();
  };

  handleOptionChange = ({ target }) => {
    const { current } = this.state;
    if(current) {
      this.setState({ current: '' });
    }
    this.setState({ input: target.id });
    this.setState({ prefix: target.value });
  };
  
  callSearch() {
    const { current, prefix } = this.state;
    if(!current && !prefix) return;
    this.props.onSearch(prefix + current);
  }

  render() {
    const { current, input } = this.state;

    return (
      <form className={styles.searchForm} onSubmit={this.handleSubmit}>
        <label>
        Search for Amiibos: 
          <input value={current} 
            onChange={this.handleChange} 
            name="search" placeholder={input}
          />
        </label>
        <label>
        &nbsp;<button>Here We Go!</button>
        </label>
        <div>
          <input type="radio" id="search All amiibo" name="amiibo-choices" value="amiibo/" onChange={this.handleOptionChange}/>
          <label>All Amiibo</label>

          <input type="radio" id="enter Name" name="amiibo-choices" value="amiibo/?character=" onChange={this.handleOptionChange}/>
          <label>By Character</label>

          <input type="radio" id="enter Game Series" name="amiibo-choices" value="amiibo/?gameseries=" onChange={this.handleOptionChange}/>
          <label>By Game Series</label>
        </div>
      </form>
    );
  }
}