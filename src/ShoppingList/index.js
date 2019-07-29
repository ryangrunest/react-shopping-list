import React, { Component } from 'react';
import ShoppingForm from '../ShoppingForm';

class ShoppingList extends Component  {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {name: 'Cheeseburger', qty: '2'},
        {name: 'Banana', qty: '3'}
      ]
    }
  }

  addItem = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));  
  }
  
  render() {
    return (
      <div className="ShoppingList">
        {this.state.items.map(item => (
          <div className="ShoppingList-item">
            <h2>{item.name}:{item.qty}</h2>
          </div>
        ))}

        <ShoppingForm addItem={this.addItem}/>
      </div>
    )
  }
}

export default ShoppingList;