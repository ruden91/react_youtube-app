import React, { Component } from 'react';

const VideoListItem = (props) => {
    console.log(props);
    return (
    <li>
        <img src={props.video.snippet.thumbnails.default.url} />
        <p>{props.video.snippet.title}</p>
    </li>
)
}

export default VideoListItem;
