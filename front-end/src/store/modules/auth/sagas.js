import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import history from '../../../services/history';
import { signFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'session', { email, password });

    const { token, user } = response.data;

    if (!user.is_provider) {
      toast.error('Não é barbeiro.');
      return;
    }

    yield put(signInSuccess(token, user));
    toast.success('Make yourself at home');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Falha na autenticação.');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
      is_provider: true,
    });
    toast.success('Cadastrado!');
    history.push('/');
  } catch (error) {
    toast.error('Falha no cadastro.');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGNIN_REQUEST', signIn),
  takeLatest('@auth/SIGNUP_REQUEST', signUp),
]);
