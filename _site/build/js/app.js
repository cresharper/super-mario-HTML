$(document).ready(function(){var o=0,e=$(".mario").position().left,t=$(".tube--large-green").position().left;$(".clouds").animate({left:"70"},4e3),$(document).keydown(function(i){39===i.which?(o+=6,$(".mario").css({left:o,transform:"scaleX(-1)"})):37===i.which?(o-=6,$(".mario").css({left:o,transform:"scaleX(1)"})):32===i.which&&($(".mario").addClass("jump"),setTimeout(function(){$(".mario").removeClass("jump")},400),e===t&&console.log("touching tube")),e===t&&console.log("touching tube")})});