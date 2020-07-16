import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultVideo: exampleVideoData[0],
      videoList: exampleVideoData
    }
  }

  onListItemTitleClick (clickedVideo) {
    //change state so defaultvideo property is set to clicked video
    this.setState({
      defaultVideo: clickedVideo
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.defaultVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} clickEvent={this.onListItemTitleClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
