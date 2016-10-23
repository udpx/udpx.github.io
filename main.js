console.log('hi');

window.onload = function () {
  var headers = document.querySelectorAll('.header');
  headers.forEach(function(header) {
    header.classList.add('add-color');
  });

  var video = document.querySelector('.background-video');
  video.classList.add('opaque-video');
}
