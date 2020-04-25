import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
  };
  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your form conatct</h4>
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
          <Button btnType="Success"> ORDER </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
