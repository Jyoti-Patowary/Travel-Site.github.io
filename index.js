 
// window.onscroll = function() {
//    myfunction()
// };

// var navbar = document.getElementsByClassName("container");
// var sticky = navbar.offsetTop;

// function myfunction(){
//    if (window.pageYOffset >= sticky) {
//       navbar.classList.add("sticky")
//    } else {
//       navbar.classList.remove("sticky")
//    }
// }

 
window.onscroll = function() {
   myfunction()
};

var navbar = document.getElementsByClassName("container");
var sticky = navbar.offsetTop;

function myfunction(){
   if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
   } else {
      navbar.classList.remove("sticky");
   }
}