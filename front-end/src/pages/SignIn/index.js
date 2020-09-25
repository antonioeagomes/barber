import React from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import logo from '../../assets/radio.svg';
import { signInRequest } from '../../store/modules/auth/actions';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Type a valid mail').required('Email is mandatory'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit({ email, password }) {
      dispatch(signInRequest(email, password));
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
