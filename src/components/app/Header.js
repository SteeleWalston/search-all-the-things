import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';

export default class Header extends Component {
    render() {
      return (
        <header className={styles.header}>
          <h1>Search Amiibos!</h1>
          <nav>
            <ul>
              <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></li>
              <li><Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link></li>
              <li><Link to="/search" style={{ textDecoration: 'none', color: 'white' }}>Search</Link></li>
              <Route path="/amiibos" render={() => <li>only on amiibos!</li>}/>
            </ul>
          </nav>
        </header>
      );
    }
  }