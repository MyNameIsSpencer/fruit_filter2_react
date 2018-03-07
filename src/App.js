import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FruitFilter from './FruitFilter.js';
import FruitList from './FruitList';

class App extends Component {
  constructor (props) {
    super(props)
    this.state= {
      fruitsToDisplay: this.props.fruits,
      filterValue: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange(e) {
    e.preventDefault()
    const filterValue= e.target.value;
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      return{
        fruitsToDisplay: filteredFruitList,
        filterValue
      }
    })
  }

  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        <p>Matching fruits:</p>
        <FruitList fruits={this.state.fruitsToDisplay} />
        <p>Unmatched fruits:</p>
        <FruitList fruits={this.state.unmatchedFruits} />
      </div>
    );
  }
}

export default App;
