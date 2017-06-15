$(document).ready(function() {

  var pos = 6;

    $(document).keydown(function(e) {

    if (e.which === 39) {
        if (pos >= 6) {
            pos += 6;
        }
        $(".mario").css('left', pos);
    } 
    else if (e.which === 37) {
        pos -= 6;
        $(".mario").css('left', pos);
    } 
    else if (e.which === 32) { 
        $(".mario").addClass('jump');

            setTimeout(function() {
                $(".mario").removeClass('jump');
            }, 400);

        } 
    });
});