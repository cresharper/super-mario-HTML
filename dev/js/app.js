$(document).ready(function() {

  // ================================
  // GAME CONTROLS
  // ================================

  // default position
  var pos = 0;

  // marios position on screen
  var marioPosition = $(".mario").position().left;

  // obstacle positioning
  var tubePosition = $(".tube--large-green").position().left;

    $(document).keydown(function(e) {

    var panelActive = $(".onload-panel").css('display');

    if (panelActive === "block") {
      return false;
    }

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

    // ================================
    // obstacle interaction
    // ================================
        if(marioPosition === tubePosition ) {
            console.log("touching tube");
        }
    });
    // KeyDown Closer

    // close intro panel and play
    $(".close").click(function(e) {
      e.preventDefault();
      $(".onload-panel").fadeOut()
    }); 

    // close window on click
    var closeButton = document.getElementById("exit-game-btn");
    closeButton.addEventListener("click", closeGameWindow);
    function closeGameWindow() {
      window.history.back();
    }    
});