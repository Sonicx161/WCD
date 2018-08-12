/* nav bar menu for 480px screen and below javascript */
var navButton = document.querySelector(".navmenu img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display == "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
} else if (navButton.attachEvent) {
   navButton.attachEvent("onclick", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display == "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   });
}


/* button javascript */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
        document.getElementById("Button").style.display="block";
    } else {
        document.getElementById("Button").style.display="none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


