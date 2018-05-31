import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

    state = {
        search: ''
    };

    handleOptionChange = ({ target }) => {
        this.setState({ search: target.value});
    };

    handleChange = ({ target }) => {
        this.setState({ search: target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state);
    };

    render() {
        const { search } = this.state;

        return (
            <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
                <label>
                    Search For Amiibos:
                    <input value={search} onChange={this.handleChange}/>
                </label>
                <button>Here we go!</button>
                <div>
                        <input type="radio" id="choice1" name="amiibo-choices" value="" onChange={this.handleOptionChange}/>
                        <label>All Amiibo</label>

                        <input type="radio" id="choice2" name="amiibo-choices" value="?character=" onChange={this.handleOptionChange}/>
                        <label>By Character</label>

                        <input type="radio" id="choice3" name="amiibo-choices" value="?gameseries=" onChange={this.handleOptionChange}/>
                        <label>By Game Series</label>
                    </div>
            </form>
        );
    }
}