var previousScroll = window.pageYOffset;
window.onscroll = function () {
  var currentScroll = window.pageYOffset;
  if (previousScroll > currentScroll) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
  previousScroll = currentScroll;
};
