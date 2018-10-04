import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  console.log('input action: ', action)
  if (action.type === 'CHANGE_VIDEO_LIST') {
    var newObject = Object.assign({}, state, { videoList: action.videos }).videoList;
    console.log(newObject);
    return newObject;
  }
  return state;
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
