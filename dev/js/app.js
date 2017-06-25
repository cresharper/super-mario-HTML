$(document).ready(function() {

  // ================================
  // CONTROLS
  // ================================

  // default position
  var pos = 0;

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

        } 
    });
});