'use strict';

/**
 * check if the user browser support mp4 type
 * @param {*} videoUrl- the video url
 */

const { body } = document;
function checkAndPlayMP4Video(videoUrl) {
  const video = document.createElement('video');

  if (video.canPlayType && video.canPlayType('video/mp4').replace(/no/, '')) {
    // Browser supports MP4 format
    video.src = videoUrl;
    video.autoplay = true;
    body.appendChild(video);
  } else {
    // Browser does not support MP4 format
    console.log('Your browser does not support the MP4 video format.');
  }
}


checkAndPlayMP4Video('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4');
