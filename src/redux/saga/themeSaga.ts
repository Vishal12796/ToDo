import { put, takeLatest } from 'redux-saga/effects';
import {
  ThemeMode,
  triggerThemeUpdate,
  updateThemeState,
} from '../slice/themeSlice';

function* updateTheme(action: any) {
  yield put(updateThemeState(action.payload));
}

export default function* themeUpdateSaga() {
  yield takeLatest(triggerThemeUpdate.type, updateTheme);
}
