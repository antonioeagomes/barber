import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFail } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { nome, email, ...rest } = payload.data;
    const profile = { nome, email, ...(rest.oldPassword ? rest : {}) };
    const response = yield call(api.put, 'users', profile);
    toast.success('Profile updated successfully');
    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Something has happened, somehow!');
    yield put(updateProfileFail());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
