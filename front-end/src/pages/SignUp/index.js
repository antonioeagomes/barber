import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import logo from '../../assets/radio.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Type a valid mail').required('Email is mandatory'),
  password: Yup.string().required('Password is required'),
  name: Yup.string().required('Name is required'),
});

const SignUp = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
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
          type="text"
          placeholder="Your name"
          name="name"
          id="name"
          onChange={handleChange}
          value={values.name}
        />
        <span>{errors.name || null}</span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          onChange={handleChange}
          value={values.email}
        />
        <span>{errors.email || null}</span>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Your password here"
          onChange={handleChange}
          value={values.password}
        />
        <span>{errors.password || null}</span>
        <button type="submit">Sign Up</button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
};

export default SignUp;
