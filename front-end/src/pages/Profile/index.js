import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import { updateProfileRequest } from '../../store/modules/user/actions';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Type a valid mail'),
  oldPassword: Yup.string().required('Password is required'),
  name: Yup.string(),
  newPassword: Yup.string(),
});

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const [confirmPassword, setConfirmPassword] = useState('');
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      ...profile,
    },
    validationSchema,
    onSubmit({ name, email, oldPassword, newPassword }) {
      dispatch(updateProfileRequest(name, email, oldPassword, newPassword));
    },
  });

  function handleChangeConfirm({ value }) {
    setConfirmPassword(value);
  }
  return (
    <Container>
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
        <hr />
        <input
          id="oldPassword"
          type="password"
          name="oldPassword"
          placeholder="Your password here"
        />
        <span>{errors.password || null}</span>
        <input
          id="newPassword"
          type="password"
          name="newPassword"
          placeholder="Your new password here"
        />
        <span>{errors.password || null}</span>
        <input
          id="ConfirmPassword"
          type="password"
          name="ConfirmPassword"
          placeholder="Confirm your new pass"
          onChange={(e) => handleChangeConfirm(e.target)}
          value={confirmPassword}
        />
        <span>{errors.password || null}</span>
        <button type="submit">Save</button>
      </form>
      <button type="button">Logout</button>
    </Container>
  );
};
export default Profile;
