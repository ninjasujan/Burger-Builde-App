import React from 'react';
import burgerLogo from '../../assets/images/original.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerLogo} alt="my burger logo" />
  </div>
);

export default logo;