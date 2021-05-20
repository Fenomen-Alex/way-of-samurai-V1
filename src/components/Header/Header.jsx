import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img
        src="https://it-kamasutra.com/images/tild3137-3939-4833-b730-313332653232__it-kamasutra-logo-on.png"
        alt="logo"
      />
      <div className={classes.loginBlock}>
        { props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
