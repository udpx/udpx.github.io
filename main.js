console.log('Hello to you, curious fellow!');

window.onload = () => {
  let largeHeader = document.querySelector('.large-description');
  largeHeader.classList.add('add-color');

  setVideoToBottom();
}

window.onresize = setVideoToBottom;

function setVideoToBottom () {
  let video = document.querySelector('.background-video');
  let videoHeight = video.clientHeight;
  let innerHeight = window.innerHeight;
  video.style.top = innerHeight - (videoHeight - 115) + 'px';
}
