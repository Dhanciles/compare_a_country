import React, { Component } from 'react';
import Card from './Card.js';

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }

 render() {
  let cards = this.props.displayCards.map((country) => {
    let continent = this.props.continentData.continents.find((continent) => 
       continent.countries.includes(country.name));
    return ( <Card country={country} continent={continent} key={country.name} deleteCard={this.props.deleteCard}/> )
  })
    return (
    <div> {cards} </div>
    )
  }
}

export default CardContainer;