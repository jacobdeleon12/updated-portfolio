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

 /*hover-effects/ */
 $("figure").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
// scrolling
AOS.init({
  duration: 1000,
})
