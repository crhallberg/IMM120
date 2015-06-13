Reveal.addEventListener('slidechanged', function(event) {
  $('iframe[data-example]').each(function(i, op) {
    if("string" === typeof $(op).data('no-reload')) return;
    $(op).attr('src', $(op).attr('src'));
  });
});

$('iframe[data-example]').load(function() {
  try {
    var exampleCode = $('#'+$(this).data('example')).text();
    if (exampleCode.indexOf('new p5()') === -1) {
      exampleCode += '\nnew p5();';
    }

    var re = /createCanvas\((.*),(.*)\)/g;
    var arr = exampleCode.split(re);
    $(this).width(arr[1]+'px');
    $(this).height(arr[2]+'px');

    var userScript = this.contentWindow.document.createElement('script');
    userScript.type = 'text/javascript';
    userScript.text = exampleCode;
    userScript.async = false;
    this.contentWindow.document.body.appendChild(userScript);
  } catch (e) {
    console.error(e.message);
  }
});

$(document).ready(function() {
  $('iframe[data-example]').each(function(i, op) {
    $(op).attr('src', '../revealjs/iframe/example.html');
    $(op).attr('src', '../revealjs/iframe/example_sound.html');
  });
  if('undefined' !== typeof tabOverride) {
    tabOverride.tabSize(2);
    $('pre.editor').each(function(i, op) {
      var $textarea = $(op).find('textarea');
      tabOverride.set($textarea[0]);
      $textarea.on('keyup', function(event) {
        $code = $(this).closest('pre.editor').find('code');
        $code.html(this.value);
        hljs.highlightBlock($code[0]);
      });
      $textarea.keyup();
    });
  }
});