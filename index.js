// Sticky Navbar

var navbar = document.getElementById("container")
 console.log(navbar);
 
window.addEventListener("scroll",() => {
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
 
if(scrolled > 500){
navbar.classList.add("sticky");
}
else{
   navbar.classList.remove("sticky");
}
});

// Smooth Scrolling

window.scroll({
   top: 2500, 
   left: 0, 
   behavior: 'smooth'
 });

 window.scrollBy({ 
   top: 100,
   left: 0, 
   behavior: 'smooth' 
 });

 document.querySelector('.forthContainer').scrollIntoView({ 
   behavior: 'smooth' 
 });

// modal
var modal = document.getElementById("modalContent");
var btn = document.getElementById("mmodal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block"
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal){
    modal.style.display = 'none';
  }
}
// //Scroll in navlinks

// const sections = document.querySelectorAll("section[id]");
// window.addEventListener("scroll", navHighlighter);

// function navHighlighter() {
//   let scrollY = window.pageYOffset;
//   console.log(scrollY);
//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute("id");
//     if (
//       scrollY > sectionTop &&
//       scrollY <= sectionTop + sectionHeight
//     ){
//       document.querySelectorAll(".container a[href*=" + sectionId + "]").classList.add("active");
//     } else {
//       document.querySelectorAll(".container a[href*=" + sectionId + "]").classList.remove("active");
//     }
//   });
// }
