function Creeper() {
  this.colors = ['G', 'B'];
  this.gPositions = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','20','21','24','25','28','29','32','33','34','35','38','39','40','41','42','47','48','49','50','55','56','57','58','60','61','63','64'];
  this.bPositions = ['18','19','22','23','26','27','30','31','36','37','43','44','45','46','51','52','53','54','59','62'];

  var theBlock = this;

  // Should have positions in the array.  Then assign a color based on position?
  // Or could assign a certain color based on position.
  //
  // Example:
  // each (position)
  //  if position in g position
  //    give it color G
  
  $.each(this.colors, function(index, color) {
    if (this.color == 'G') {
      $.each(theBlock.gPositions, function(index, gposition) {
        var block = new Block(color, 0, gposition);
        $('#scrambled').append(block.toHTML());
        console.log(block);
      });
    } else {
      $.each(theBlock.bPositions, function(index, bposition) {
        var block = new Block(color, bposition, 0);
        $('#scrambled').append(block.toHTML());
      });
    };
  });
}

function Block(color, bposition, gposition) {
  this.color = color;
  this.bposition = bposition;
  this.gposition = gposition;
  this.toHTML = function() {
    return '<div id="square" class=' + this.color + '>' + this.color + this.position + '</div>';
  }
}

$(document).ready(function() {
 // for (i = 0; i < 64; i++) {
 //   $('#scrambled').append('<div class="square"></div');    
 // }
 var creeper = new Creeper();
})

//blck = 20
//g = 44


