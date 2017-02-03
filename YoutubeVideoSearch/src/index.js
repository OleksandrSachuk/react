import React, {Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAi1CzVpifuFUDVQf3dzrTu3mwJDP2n8r8';

class App extends Component {
    constructor(props){
        super(props);
        this.state= {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('adele');
    }
    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos:videos,
                selectedVideo: videos[0]
            });
        });
    }

    render (){
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
        return (
            <div className="container">
                <br/>
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                    </div>
                </div>
                <br/>
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({selectedVideo})  }
                        videos={this.state.videos} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));