import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
const hydrateStore = {
  currentVideo: null,
  videoList: [],
  search: 'teahupoo',
};
const store = createStore(rootReducer, hydrateStore, applyMiddleware(thunk));

export default store;