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
        console.log(block);
      });
    } else {
      $.each(theBlock.bPositions, function(index, position) {
        var block = new Block(color, position);
        $('#container').append(block.toHTML());
        console.log(block);
      });
    }
  });
}

function Block(color, position) {
  this.color = color;
  this.position = position;
  this.toHTML = function() {
    return '<div id="square" class="' + this.color +'"' + ' position=' + 
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
  if (divs.length < 2 ) {
    return divs;
  }
  var middle =  parseInt(divs.length / 2),
      left =    divs.slice(0, middle),
      right =   divs.slice(middle);
  //console.log(left.eq(0).attr('position'));
  //console.log(left.length);
  //console.log(left +"-" +right + "-" + middle);
  //console.log(divs.slice(0,middle));
  //console.log(left.eq(0).attr('position'));
  //console.log(right.eq(0).attr('position'));
  //if (left.eq(0).attr('position') < right.eq(0).attr('position')) {
  //  console.log(left.eq(0).attr('position'));
  //}
  console.log(divs);

  
  return mergeSort(sort(left), sort(right));
}

function mergeSort(left, right) {
  var result = [],
      l = 0,
      r = 0,
      lPosition = left.eq(0).attr('position'),
      rPosition = right.eq(0).attr('position');
  console.log(left.length);

  if (l < left.length && r < right.length) {
    if (lPosition < rPosition) {
      console.log(lPosition);
      $('#container').prepend(left.eq(0));
    } else {
      console.log(rPosition);
      $('#container').prepend(right.eq(r++));
    }
  }
}


$('#shuffle').on('click', function() {
  shuffle($('#container #square').length - 1);
  console.log($('#container #square').length - 1);
});

$('#sort').on('click', function() {
  var divs = $('div[position]');
  console.log(divs);
  sort(divs);
})

$(document).ready(function() {
  var creeper = new Creeper();
});

//blck = 20
//g = 44


