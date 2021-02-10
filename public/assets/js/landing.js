$(document).ready(() => {

var countDownDate = new Date();
countDownDate.setHours(24,0,0,0);

var x = setInterval(function() {
  var now = new Date().getTime();
  countDownDate
  var distance = countDownDate.getTime() - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("promotion-counter").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("promotion-counter").innerHTML = "EXPIRED";
  }
}, 1000);
});