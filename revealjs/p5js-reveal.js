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
  $('iframe[data-example]').attr('src', '../revealjs/iframe/example.html');
  $('iframe[data-example][data-sound]').attr('src', '../revealjs/iframe/example_sound.html');
});