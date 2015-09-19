Reveal.addEventListener('slidechanged', function(event) {
  if($('[data-copy]').length > 0) {
    var map = [];
    $('[data-copy]').each(function(i, op) {
      map[op.dataset.copy] = op.id;
    });
    var queue = [];
    for(var i in map) {
      if('undefined' === typeof document.getElementById(map[i]).dataset.copy) {
        queue.push(map[i]);
      }
      if('undefined' === typeof document.getElementById(i).dataset.copy
      && 'undefined' === typeof queue[i]) {
        queue.push(i);
      }
    }
    if(queue.length == 0) {
      console.log('your copies are looped and have no beginning.');
    }
    var visited = [];
    while(queue.length > 0) {
      var id = queue.pop();
      if('undefined' !== typeof map[id]) {
        if('undefined' !== typeof visited[id]) {
          console.log('loop prevented');
          continue;
        }
        if('undefined' === typeof $('#'+map[id]).data('changed')) {
          document.getElementById(map[id]).innerHTML = document.getElementById(id).innerHTML;
        }
        visited.push(id);
        queue.push(map[id]);
      }
    }
  }

  $('iframe[data-code], iframe[data-example]').each(function(i, op) {
    if("string" === typeof $(op).data('no-reload')) return;
    $(op).attr('src', $(op).attr('src')); // calls load
  });
});

function html_entity_decode(string, quote_style) {
  var hash_map = {},
      symbol = '',
      tmp_str = '',
      entity = '';
  tmp_str = string.toString();

  delete(hash_map['&']);
  hash_map['&'] = '&amp;';

  for (symbol in hash_map) {
    entity = hash_map[symbol];
    tmp_str = tmp_str.split(entity).join(symbol);
  }
  tmp_str = tmp_str.split('&#039;').join("'");

  return tmp_str;
}

$('iframe[data-code], iframe[data-example]').load(function() {
  try {
    var $code = $('#'+$(this).data('example'));
    if ($code.length === 0) {
      $code = $('#'+$(this).data('code'));
    }
    var exampleCode = html_entity_decode($code.text());
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
  $('iframe[data-code], iframe[data-example]').each(function(i, op) {
    $(op).attr('src', '../revealjs/iframe/example.html');
  });
  $('iframe[data-sound]').each(function(i, op) {
    $(op).attr('src', '../revealjs/iframe/example_sound.html');
  });

  $('[data-copy]').on('keyup', function() {
    $(this).data('changed', 1);
  });

  if('undefined' !== typeof tabOverride) {
    tabOverride.tabSize(2);
    $('pre.editor').each(function(i, op) {
      console.log(op);
      var $textarea = $(op).find('textarea');
      tabOverride.set($textarea[0]);
      $textarea.on('keyup', function(event) {
        $code = $(this).closest('pre.editor').find('code');
        $code.html($('<div/>').text(this.value).html());
        if (typeof hljs !== "undefined") {
          hljs.highlightBlock($code[0]);
        }
      });
      $textarea.keyup();
    });
  }
});