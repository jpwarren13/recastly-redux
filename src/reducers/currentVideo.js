import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';

var currentVideoReducer = (state = null, action) => {

  if (action.type === 'CHANGE_VIDEO') {
    return Object.assign({}, state, {currentVideo: action.video}).currentVideo;
  }

  return state;
  //TODO: define a reducer for the currentVideo field of our state.
};

export default currentVideoReducer;
