/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
var hamburger= document.querySelector("#hamburger")

function myFunction() {
  console.log("attempting to open hamburger")
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

hamburger.addEventListener("click", myFunction);

$(document).ready(function(){
  $(".navHover").hover(function(){
    $(this).css("color", "#19bcdf");
    }, function(){
    $(this).css("color", "black");
  });
});