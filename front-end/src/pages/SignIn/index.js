import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import logo from '../../assets/radio.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Type a valid mail').required('Email is mandatory'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit(v) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(v));
    },
  });
  return (
    <>
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
          value={values.email}
        />
        <span>{errors.email || null}</span>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your password here"
          onChange={handleChange}
          value={values.password}
        />
        <span>{errors.password || null}</span>
        <button type="submit">Sign In</button>
        <Link to="/register">Sign Up</Link>
      </form>
    </>
  );
};

export default SignIn;
