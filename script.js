function Creeper() {
  this.colors = ['G', 'B'];
  this.gPositions = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','19','20','23','24','27','28','31','32','33','34','37','38','39','40','41','46','47','48','49','54','55','56','57','59','60','62','63'];
  this.bPositions = ['17','18','21','22','25','26','29','30','35','36','42','43','44','45','50','51','52','53','58','61'];

  var theBlock = this;

  $.each(this.colors, function(index, color) {
    if (color == 'G') {
      $.each(theBlock.gPositions, function(index, position) {
        var block = new Block(color, position);
        $('#scrambled').append(block.toHTML());
        console.log(block);
      });
    } else {
      $.each(theBlock.bPositions, function(index, position) {
        var block = new Block(color, position);
        $('#scrambled').append(block.toHTML());
        console.log(block);
      });
    }
  });
}

function Block(color, position) {
  this.color = color;
  this.position = position;
  this.toHTML = function() {
    return '<div id="square" class=' + this.color +' ' + 
      this.position + '></div>';
  };
}

function shuffle(m) {
  // swap last card with a random card from left
  var $mth,
    rand = Math.floor(Math.random() * m),
    $rand;

  //$('li').removeClass('swapping');

//  $mth = $('#square:eq(' + m + ')')
//    //.addClass('swapping')
//    .fadeIn();
//    console.log($mth);
//  $rand = $('#square:eq(' + rand + ')')
//    //.addClass('swapping')
//    .fadeIn();
//    console.log($rand);

  $mth = $('#square:eq(' + m + ')')
    //.addClass('swapping')
    .fadeIn();
    console.log($mth);
  $rand = $('#square:eq(' + rand + ')')
    //.addClass('swapping')
    .fadeIn();
    console.log($rand);
  $mth.before($rand);
  $('#square:eq(' + rand + ')').before($mth);

  if (m > 0) {
    setTimeout(shuffle, 100, m - 1);
    console.log(m);
  } else {
    //$('li').removeClass('swapping');
    console.log("hello");
  }
}


$('#shuffle').on('click', function() {
  shuffle($('#scrambled #square').length - 1);
  console.log($('#scrambled #square').length - 1);
});

$(document).ready(function() {
 var creeper = new Creeper();
});

//blck = 20
//g = 44


