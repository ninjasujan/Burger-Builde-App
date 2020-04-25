import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sujan',
        address: {
          street: 'Test street',
          zipCode: '08254',
          country: 'Indian',
        },
        email: 'sujan@gmail.com',
      },
      deleiveryMethod: 'fastest',
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        console.log(response);
        this.setState({
          loading: false,
        });
        this.props.history.push('/');
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          loading: false,
          purchasing: false,
        });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter your name..."
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Enter your Email..."
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter your street..."
        />
        <input
          className={classes.Input}
          type="text"
          name="pincode"
          placeholder="Enter your pin code..."
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          {' '}
          ORDER{' '}
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your form conatct</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
