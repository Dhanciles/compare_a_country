import React, { Component } from 'react';
import './Filter.css';

class Filter extends Component {
  render() {
    return (
      <nav>
        <li>
          Population
        </li>
        <li>
          GDP
        </li>
        <li>
          Area
        </li>
        <li>
          Climate
        </li>
        <li>
          Continent
        </li>
      </nav>
    );
  }
}
export default Filter;