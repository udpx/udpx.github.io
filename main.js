console.log('Hello to you, curious fellow!');

addClassesOnLoad(
  ['.large-description', 'add-color'],
  ['.background-video', 'opaque-video']
);

function addClassesOnLoad () {
  var args = [].slice.call(arguments);

  window.onload = function () {
    args.forEach(function(declaration) {
      var elementName = declaration[0];
      var className = declaration[1];

      var element = document.querySelector(elementName);
      element.classList.add(className);
    })
  }
}
