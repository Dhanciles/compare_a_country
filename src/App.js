import React, { Component } from 'react';
import './App.css';
import Filter from './Filter.js';
import Search from './Search.js';
import List from './List.js';
import Card from './Card.js';
import CardContainer from './CardContainer.js';

class App extends Component {  
  constructor() {
    super(); 
    this.state = {
      countryData: [],
      continentData: [],
      countryInput: '', 
      displayCards: [], 
      populationItemCliked: false, 
      gdpItemClicked: false, 
      areaItemClicked: false, 
      climateItemClicked: false, 
      continentItemClicked: false,
    }
  } 
    componentDidMount = () => {
        this.getCountryData();
        this.getContinentData();
    }

    getCountryData = () => {
      fetch('http://whateverly-datasets.herokuapp.com/api/v1/countries')
        .then(response => response.json())
        .then(countries => {
          this.setState({
            countryData: countries
          })
        })
        .catch(error => console.log(error))
    }

    getContinentData = () => {
      fetch('http://whateverly-datasets.herokuapp.com/api/v1/continents')
        .then(response => response.json())
        .then(continents => {
          this.setState({
            continentData: continents
          })
        })
        .catch(error => console.log(error))
    }

    updateCountryInput = (countryName) => {
      this.setState({
        countryInput: countryName
      })
    }

    findCountry = (countryName) => {

        let chosenCountryObj = this.state.countryData.countries.find((country) => {
          if (country.name.toLowerCase() === countryName) {
            return country;
          }
        })
        if (!this.state.displayCards.includes(chosenCountryObj)) {
        this.setState({
        displayCards: [...this.state.displayCards, chosenCountryObj]
        }) 
      }
    }

    deleteCard = (deletedCard) => {
      //set the state of the cards so the array of display cards no longer contains that country
      this.setState({
        displayCards: this.state.displayCards.filter(item => item !== deletedCard.props.country)
        })
    }

    togglePopulationMenu = () => {
      this.setState({
        populationItemCliked: true
      })
    }

    toggleGdpMenu = () => {
      this.setState({
        gdpItemClicked: true
      })
    }

    toggleAreaMenu = () => {
      this.setState({
        areaItemClicked: true
      })
    }
    
    toggleClimateMenu = () => {
      this.setState({
        climateItemClicked: true
      })
    }

    toggleContinentMenu = () => {
      this.setState({
        continentItemClicked: true
      })
    }

  render() {
    if (this.state.displayCards.length < 1) {
    return (
      <div className="App">
        <header className="App-header">
          <Search countryData={this.state.countryData} continentData={this.state.continentData} updateCountryInput={this.updateCountryInput} findCountry={this.findCountry}/>
          <Filter togglePopulationMenu={this.togglePopulationMenu} toggleGdpMenu={this.toggleGdpMenu} toggleAreaMenu={this.toggleAreaMenu} toggleClimateMenu={this.toggleClimateMenu} toggleContinentMenu={this.toggleContinentMenu}/>
        </header>
        <main className = "App-main">
          <List className="list-container" />
        </main>
      </div>
       )
    } else {
        return (
         <div className="App">
        <header className="App-header">
          <Search countryData={this.state.countryData} continentData={this.state.continentData} updateCountryInput={this.updateCountryInput} findCountry={this.findCountry}/>
          <Filter togglePopulationMenu={this.togglePopulationMenu} toggleGdpMenu={this.toggleGdpMenu} toggleAreaMenu={this.toggleAreaMenu} toggleClimateMenu={this.displayClimateMenu} toggleContinentMenu={this.toggleContinentMenu}/>
        </header>
        <main className = "App-main">
          <List className="list-container" />
          <CardContainer className="card-container" displayCards={this.state.displayCards} continentData={this.state.continentData} deleteCard={this.deleteCard} />
        </main>
      </div> 
      )
    }
  }
}

export default App;