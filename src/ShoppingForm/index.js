import React, { Component } from 'react';

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: ''
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Cheese"
          onChange={this.handleChange}
          id="name"
          name="name"
        />
        <label htmlFor="qty">Quantity</label>
        <input
          type="text"
          placeholder="15"
          onChange={this.handleChange}
          id="quantity"
          name="qty"
        />
        <button>Add Item</button>
      </form>
    )
  };
}
export default ShoppingForm;