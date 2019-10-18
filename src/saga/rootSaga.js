import {
  put,
  takeEvery,
  all,
  take,
  call
} from 'redux-saga/effects';

import apiRequest from '../api/apiRequest';

// this function is not being used in the code below
const delay = ms =>
  new Promise(res => {
    setTimeout(() => {}, ms);
  });

function* messageSagaWorld(action) {
  // the action is the action dispatched by the action creator
  console.log('saga world fired');
  console.log(action);
  yield put({
    // dispatching the action, this is dispatched to the reducers
    type: 'World'
  });
}

function* getPosts(action) {
  console.log('saga demon fired');
  console.log(action);
  try {
    const response = yield apiRequest.get(
      `/${action.message}`
    );
    console.log(response.data);
    yield put({
      // dispatching the action, this is dispatched to the reducers
      type: 'Demons',
      data: response.data
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: 'Network Error'
    });
  }
}

// watch for the action types
function* watchSaga() {
  yield takeEvery('MSG_World', messageSagaWorld);
  yield takeEvery('MSG_Demons', getPosts);
}

// only export the root sage
export default function* rootSaga() {
  yield all([watchSaga()]);
}
