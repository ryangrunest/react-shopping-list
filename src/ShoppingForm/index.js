import React, { Component } from 'react';

class ShoppingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      qty: ''
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addItem(this.state);
    this.setState({
      name: '',
      qty: ''
    })
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
          value={this.state.name}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="text"
          placeholder="15"
          onChange={this.handleChange}
          id="quantity"
          name="qty"
          value={this.state.qty}
        />
        <button>Add Item</button>
      </form>
    )
  };
}
export default ShoppingForm;