import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/radio.svg';

const SignIn = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <form>
        <input type="email" placeholder="Your email" />
        <input
          type="password"
          name="password"
          placeholder="Your password here"
        />
        <button type="submit">Sign In</button>
        <Link to="/register">Sign Up</Link>
      </form>
    </>
  );
};

export default SignIn;
