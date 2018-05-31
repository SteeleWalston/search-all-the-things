import React, { Component } from 'react';
import styles from './App.css';
import { search } from '../services/amiiboApi.js';
import Search from './Search';
import Results from './Results';
import Paging from './Paging';

const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')

export default class App extends Component {

    
    state = {
        topic: '',
        loading: false, 
        error: null,
        totalResults: 0,
        page: 1,
        perPage: 4,
        results: []
    };

    handleOptions = () => {

    };

    searchAmiibo = () => {
        const { topic, page, perPage } = this.state;

        this.setState({ loading: true });

        search({ topic }, { page, perPage })
            .then((body) => {
                this.setState({ results: body.amiibo, totalResults: body.amiibo.length, error: null });
            }, error => {
                this.setState({ error });
            })
            .then(() => this.setState({ loading: false}));
    };

    handleSearch = ({ search }) => {
        this.setState({ topic: search }, this.searchAmiibo);
      };
    
    handlePage = ({ page }) => {
        this.setState({ page }, this.searchAmiibo);
    };

    render() {

        const { results, loading, totalResults, page, perPage, error } = this.state;

        return (
            <div>
                <header>
                    <div className="header-container">
                        <img/>
                        <h1>Search Amiibo!</h1>
                    </div>
                    <div className="search-container">
                        <Search onSearch={this.handleSearch}/>
                    </div>
                </header>
                <main>
                    <section className="notifications">
                        {loading && <div>Loading...</div>}
                        {error && <div>{error.message}</div>}
                    </section>
                    <section>
                        <Paging
                            totalResults={totalResults}
                            page={page}
                            perPage={perPage}
                            onPage={this.handlePage}
                        />
                        <Results results={results}/>
                    </section>
                </main>
            </div>
        );

    }

}