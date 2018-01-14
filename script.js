window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 397 || document.documentElement.scrollTop > 397) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-69px";
  }
}