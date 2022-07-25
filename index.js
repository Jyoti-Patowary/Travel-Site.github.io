
var navbar = document.getElementById("container")
// var menu = document.getElementById("menu")
 console.log(navbar);
 
window.addEventListener("scroll",() => {
// console.log('scrolled');
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
const scrolled = window.scrollY;
// console.log(scrolled);
 
if(scrolled > 550){
navbar.classList.add("sticky");
}
else{
   navbar.classList.remove("sticky");
}
});
