import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import videoListReducer from './videoList.js';
import currentVideoReducer from './currentVideo.js';

var rootReducer = (state = {videoList: [], currentVideo: null}, action) => {
  return combineReducers({videoList: videoListReducer, currentVideo: currentVideoReducer})(state, action);

  // if (action.type === 'CHANGE_VIDEO') {
  //   return Object.assign({}, state, {currentVideo: action.video});
  // }
  // if (action.type === 'CHANGE_VIDEO_LIST') {
  //   return Object.assign({}, state, { videoList: action.videos});
  // }
  // return state;
  //return combineReducers({currentVideo, videoList});
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
