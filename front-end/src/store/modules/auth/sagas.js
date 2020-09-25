import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInRequest } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;
  const response = yield call(api.post, 'sessions', { email, password });

  const { token, user } = response.data;

  if (!user.isProvider) {
    // eslint-disable-next-line no-console
    console.log('Não é barbeiro');
    return;
  }

  yield put(signInRequest(token, user));
  history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGNIN_REQUEST', signIn)]);
