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

 //Carousel

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}