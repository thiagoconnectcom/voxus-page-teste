/* menu mobile */
$(document).ready(function() {
  $(".button-free").click(function() {
    $(".button-obrigado").fadeIn(function() {
      $(".button-free").css("display", "none");
      $(".descriptioin-button").css("display", "block");
    });
  });
});
