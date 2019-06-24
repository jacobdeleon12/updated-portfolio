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
// scrolling animations
AOS.init({
  duration: 900,
})

// pie
var options = {
  animation: {
    animateScale: false,
    animateRotate: true
  },

  rotation: 1 * Math.PI,
  circumference: 1 * Math.PI,

  tooltips: {
    backgroundColor: "#FFF",
    titleFontSize: 16,
    titleFontColor: "#0066ff",
    bodyFontColor: "#000",
    bodyFontSize: 14,
    displayColors: false
  },

  responsive:true,
  maintainAspectRatio: false,


};


var codeSkills = {
  labels: ["Git", "HTML-CSS", "Node.js", "Javascript"],
  datasets: [
    {
      backgroundColor: [
        "#488f31",
        "#a5a73f",
        "#f4bd6a",
        "#eb8050"
      ],
      data: [10, 20, 30, 40]
    }
  ]
};

var peopleSkills = {
  labels: ["Adaptability", "Leadership", "Critical Thinking", "TeamWork"],
  datasets: [
    {
      backgroundColor: [
        "#003f5c",
        "#58508d",
        "#bc5090",
        "#ff6361"
      ],
      data: [10, 20, 30, 40]
    }
  ]
};



var code = document.getElementById("myChart").getContext("2d");
var chart = new Chart(code, {
  type: "doughnut",
  data: codeSkills,
  options: options
});

var skills = document.getElementById("skills").getContext("2d");
var chart = new Chart(skills, {
  type: "doughnut",
  data: peopleSkills,
  options: options
});