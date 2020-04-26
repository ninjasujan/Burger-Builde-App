import React from 'react';
import classes from './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
  <li className={classes.NavigationItem}>
    {/* <a href={props.link} className={props.active ? 'active' : null}>
      {props.children}
    </a> */}
    <NavLink
      to={props.link}
      exact
      className={props.active ? classes.active : null}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
