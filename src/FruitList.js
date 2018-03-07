import React, { Component } from 'react';

class FruitList extends Component {



  render() {
    return(
      <ul>
        {this.props.fruits.map(fruit => <li>fruit</li>)}
      </ul>
    )
  }

}

export default FruitList;
