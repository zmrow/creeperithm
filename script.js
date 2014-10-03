function Creeper() {
  this.colors = ['G', 'B'];
  this.gPositions = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','19','20','23','24','27','28','31','32','33','34','37','38','39','40','41','46','47','48','49','54','55','56','57','59','60','62','63'];
  this.bPositions = ['17','18','21','22','25','26','29','30','35','36','42','43','44','45','50','51','52','53','58','61'];

  var theBlock = this;

  $.each(this.colors, function(index, color) {
    if (color == 'G') {
      $.each(theBlock.gPositions, function(index, position) {
        var block = new Block(color, position);
        $('#container').append(block.toHTML());
        //console.log(block);
      });
    } else {
      $.each(theBlock.bPositions, function(index, position) {
        var block = new Block(color, position);
        $('#container').append(block.toHTML());
        //console.log(block);
      });
    }
  });
}

function Block(color, position) {
  this.color = color;
  this.position = position;
  this.toHTML = function() {
    return '<div class="square ' + this.color +'"' + ' data-position=' + 
      this.position + '></div>';
  };
}

function shuffle(m) {
  // Start with final block and swap with one before it
  var $mth,
    rand = Math.floor(Math.random() * m),
    $rand;

  $mth = $('#container > div:eq(' + m + ')')
    .fadeOut(50).fadeIn(200);
    console.log($mth);
  $rand = $('#container > div:eq(' + rand + ')')
    .fadeOut(50).fadeIn(200);
    console.log($rand);

  $mth.before($rand);
  $('#container > div:eq(' + rand + ')').before($mth);

  if (m > 0) {
    setTimeout(shuffle, 500, m - 1);
    console.log(m);
  } else {
    console.log("hello");
  }
}

function sort(divs) {
  if (divs.length == 1) {
    return divs;
  }

  var middle =  (divs.length / 2),
      left =    divs.slice(0, middle),
      right =   divs.slice(middle, divs.length);

  return mergeSort(sort(left), sort(right));
}

function mergeSort(left, right) {
  console.log(left);
  console.log(jQuery.type(left));
  console.log(left[0]);
  var blah = left[0];
  blah.attr('data-position');
  var result = [],
      lPosition = left[0],
      rPosition = right.eq(0).attr("data-position");
      console.log(lPosition);
      

  while (left.length || right.length) {
    if(left.length && right.length) {
      if (lPosition < rPosition) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    } else if (left.length) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  console.log(result);
  return result;
}

$('#shuffle').on('click', function() {
  shuffle($('#container .square').length - 1);
  console.log($('#container .square').length - 1);
});

$('#sort').on('click', function() {
  var divs = $('div[data-position]').toArray();
  sort(divs);
});

$(document).ready(function() {
  var creeper = new Creeper();
});

