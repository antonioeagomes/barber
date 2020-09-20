import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/radio.svg';

const SignUp = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <form>
        <input type="text" placeholder="Your name" name="name" id="name" />
        <input type="email" name="email" id="email" placeholder="Your email" />
        <input
          type="password"
          name="password"
          placeholder="Your password here"
        />
        <button type="submit">Sign Up</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
};

export default SignUp;
