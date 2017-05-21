import React, { Component } from 'react';

class VideoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                <li>
                    {this.props.videos.length}
                </li>
            </ul>
        );
    }
}

export default VideoList;
