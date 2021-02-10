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


dataTime = document.getElementById('timer').getAttribute('data-time');
if (dataTime == 0) {
  endTime();
}
document.getElementById('timer').innerHTML = dataTime + ":" + 00;
startTimer();
function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if (s == 59) { m = m - 1 }

  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  if (s == 0 && m == 0) {
    alert('done');
    endTime();
  }
}
function endTime() {
  document.getElementById('timer-parent').innerHTML = "Done";
}
function checkSecond(sec) {
  if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
  if (sec < 0) { sec = "59" };
  return sec;
}