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

  mergeSort(sort(left), sort(right));
}

function mergeSort(left, right) {
  var result = [],
      l = 0,
      r = 0,
      lPosition = left.eq(l).attr('position'),
      rPosition = right.eq(r).attr('position');

  while (l < left.length && r < right.length) {
   if (lPosition < rPosition) {
      result.push(left.eq(l));
      l+=1;
      console.log(result);
   } else {
      result.push(left.eq(r));
      
      console.log(result);
   }
  }
  return result.concat(left.slice(l)).concat(right.slice(r));
}

function bubbleSort(divs) {
  for (var i = 0; i < divs.length *3; i++) {
    var first = divs.eq(i).attr('position'),
        second = divs.eq(i + 1).attr('position'),
        rand = Math.floor(Math.random() * 63),
        $ath = $('#container > div:eq('+ i +')'),
        $bth = $('#container > div:eq('+ (i+1) +')'),
        $rand = $('#container > div:eq(' + rand + ')');
    console.log(first,second);
    if (first > second) {
      console.log("true");
    };
  };
  console.log(divs);
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

