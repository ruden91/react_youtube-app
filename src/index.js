import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/searchBar';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyDBBxMrXMXfQ71ud8PmXt8drTp_bcPZJyU';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        YTSearch({
            key: API_KEY,
            term: 'zunba'
        }, (data) => {
            this.setState({
                videos: data
            })
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
