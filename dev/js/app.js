$(document).ready(function() {
  // ================================
  // CONTROLS
  // ================================

  // default position
  var pos = 0;

  // marios position on screen
  var marioPosition = $(".mario").position().left;

  // obstacle positioning
  var tubePosition = $(".tube--large-green").position().left;

  $(".clouds").animate({
     left: "70",
  }, 4000);

    $(document).keydown(function(e) {

    if (e.which === 39) {
        pos += 6;
        $(".mario").css({
            'left':pos, 
            'transform':'scaleX(-1)'
        });
    } 

    else if (e.which === 37) {
        pos -= 6;
        $(".mario").css({
            'left':pos, 
            'transform':'scaleX(1)' 
        });
    } 

    else if (e.which === 32) { 
        $(".mario").addClass('jump');

            setTimeout(function() {
                $(".mario").removeClass('jump');
            }, 400);
            
            if(marioPosition === tubePosition ) {
              console.log("touching tube");
            }
        } 

    // ================================
    // obstacle interaction
    // ================================
        if(marioPosition === tubePosition ) {
            console.log("touching tube");
        }
    });
    // KeyDown Closer

});