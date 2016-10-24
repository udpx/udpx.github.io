console.log('Hello to you, curious fellow!');

window.onload = function () {
  var largeHeader = document.querySelector('.large-description');
  largeHeader.classList.add('add-color');

  setVideoToBottom();
}

window.onresize = setVideoToBottom;

function setVideoToBottom () {
  var video = document.querySelector('.background-video');
  var videoHeight = video.clientHeight;
  var innerHeight = window.innerHeight;
  video.style.top = innerHeight - (videoHeight - 105) + 'px';
}
