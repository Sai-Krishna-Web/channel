import { call, put,takeLatest, all } from 'redux-saga/effects';
import { Channels } from '../actions/constants';
import { fetchChannelsAPI } from '../API';
import {
  fetchChannels,
  fetchChannelsSuccess,
  fetchChannelsError,
} from '../actions/channelActions';

//const ChannelsApi = new ChannelsAPI;

function* getChannels(action) {
  
  yield takeLatest(Channels.fetchChannels, getChannelsFromAPI)
}

function* getChannelsFromAPI(action) {
  try {
    // call the api
    
    const data = yield call(fetchChannelsAPI);
    // call the success action with data
   
    yield put(fetchChannelsSuccess(data));
  } catch (e) {
    // call the error action with data
    yield put(fetchChannelsError(e));
  }

}

function* getChannelsSuccess() {
  // do anything you want in here,
  // you can set up a redirect, or
  // trigger a notification

}

export default function* rootSaga() {
  yield all([
    getChannels(),
  ])
}
