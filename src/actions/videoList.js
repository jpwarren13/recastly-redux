const CHANGE_VIDEO_LIST = 'CHANGE_VIDEO_LIST';

var changeVideoList = (videos) => {
  console.log(videos);
  return { type: CHANGE_VIDEO_LIST, videos };
  //TODO:  Return some action object to change the list of videos in VideoList.
};

export default changeVideoList;
