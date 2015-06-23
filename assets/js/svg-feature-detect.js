// IE 8 doens't need the an HTML5shiv to test SVGs.
// IE 6/7 doesn't seem to work here, but should, and is likely fixable.

(function(){
  var supportsSvg = function() {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  };

  if (!supportsSvg()) {
    document.documentElement.className += " no-svg";
  };
})();
