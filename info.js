(function (name, context, definition) {
  'use strict'
  if (typeof window.define === 'function' && window.define.amd) { window.define(definition) } else if (typeof module !== 'undefined' && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
})('GetInfo3724', this, function () {
  'use strict'
  function isVisible(el) {
      while (el) {
          if (el === document) {
              return true;
          }
          var $style = window.getComputedStyle(el, null);
          if (!el) {
              return false;
          } else if (!$style) {
              return false;
          } else if ($style.display === 'none') {
              return false;
          } else if ($style.visibility === 'hidden') {
              return false;
          } else if (+$style.opacity === 0) {
              return false;
          } else if (($style.display === 'block' || $style.display === 'inline-block') &&
              $style.height === '0px' && $style.overflow === 'hidden') {
              return false;
          } else {
              return $style.position === 'fixed' || isVisible(el.parentNode);
          }
      }
  }
  function textContent(el) {
    return (el.innerText || el.textContent)
  }
  function getInfo() {
    var content = "";
    var all = document.getElementsByTagName("*");
    var title = document.querySelector('title');
    content += textContent(title) + '. ';
    for (var i=0, max=all.length; i < max; i++) {
      if ( isVisible(all[i]) && all[i].children.length === 0) {
        var text = textContent(all[i]);
        if (text !== null && typeof text !== undefined && text.length > 0) {
          content += text+ '. ';
        }
      }
    }
    console.log(content);
    new Fingerprint2({
      // extendedJsFonts: true
    }).get(function(result, components){
        console.log(result)
        console.log(components)
      });
  }
  setTimeout(getInfo, 200);
});
