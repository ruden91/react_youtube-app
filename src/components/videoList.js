import React, { Component } from 'react';
import VideoListItem from './videoListItem';

const VideoList = (props) => {
    console.log(props);
    const videoItems = props.videos.map((videos) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={videos.etag}
                video={videos}
            />
        );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
}

export default VideoList;
