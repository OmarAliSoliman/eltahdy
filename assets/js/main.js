$(document).ready(function () {
  if ($(".footer-desktop-slider").length) {
    $(".footer-desktop-slider").slick({
      arrows: true,
    });
  }

  if ($(".footer-mobile-slider").length) {
    $(".footer-mobile-slider").slick({
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


