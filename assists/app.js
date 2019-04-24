// this is for the navbar to operate correctly
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// particle
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: ' rgb(131, 131, 131)',
    lineColor: ' rgb(131, 131, 131)',
    density: 15000
  });
 
});

 /* Demo purposes only https://speckyboy.com/advanced-image-hover-effects/ */
 $("figure").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);