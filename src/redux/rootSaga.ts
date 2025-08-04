import { all } from 'redux-saga/effects';
import themeUpdateSaga from './saga/themeSaga';

export default function* rootSaga() {
  yield all([themeUpdateSaga()]);
}
