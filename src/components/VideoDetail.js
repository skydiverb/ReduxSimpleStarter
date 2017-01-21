import React from 'react';

const VideoDetail = ({video}) => { // Same as const video = props.video
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/ + ${videoId}`; // with the iframe Tag it shows a youtube player with the video.

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src="" className="embed-responsive-item" frameborder="0"></iframe> {/* just provide src=url and iframe will render that video */}
      </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
    </div>
  )
}
export default VideoDetail;
