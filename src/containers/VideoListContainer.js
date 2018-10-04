import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
import currentVideoReducer from '../reducers/currentVideo.js';
const mapStateToProps = state => ({videos: state.videoList});
//{handleVideoChange: () => currentVideoReducer(state, changeVideo())}
var mapDispatchToProps = (dispatch) => ( {handleVideoListEntryTitleClick: title => dispatch(changeVideo(title))});
//connect(mapStateToProps, mapDispatchToProps)(VideoList);
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

{ /* <VideoList
              handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
              videos={this.state.videos}
            /> */ }