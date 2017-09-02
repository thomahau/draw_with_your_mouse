$(document).ready(function() {
  var $canvas = $("<div>").addClass("canvas");
  $("body").append($canvas);

  for (var i = 0; i < 256; i++) {
    var $defaultBlock = $("<div>").addClass("block default-block");
    $(".canvas").append($defaultBlock);
  };

  $(".canvas").on("mouseenter", ".block", function() {
    $(this).addClass("trail");
  });

  $("button").on("click", function(event) {
    event.preventDefault();
    $(".block").remove();
    var numberOfSquaresPerSide = prompt("How many squares per side would you like?");

    for (var i = 0; i < (numberOfSquaresPerSide*numberOfSquaresPerSide); i++) {
      $(".canvas").append(new BlockBuilder(numberOfSquaresPerSide));
    };
  });

  BlockBuilder = function(length) {
    var $block = $("<div>").css({height: (560 / length), width: (560 / length)});
    $block.addClass("block");
    return $block;
  };

});
