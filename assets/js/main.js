$(document).ready(function () {
  if ($(".footer-slider").length) {
    $(".footer-slider").slick({
      arrows: true,
    });
  }

  if ($("#countdown").length) {
    $("#countdown").timeTo(3600, function () {
      alert("Countdown finished");
    });
  }

  // $('select').select2();
});
