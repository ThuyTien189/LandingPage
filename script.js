var myIndex = 0;
    carousel();
    
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
function handleChangeHeader() {
  let changePosition = document.querySelector(".store").offsetTop;
  if(window.scrollY >= changePosition) {
    document.querySelector(".header").classList.add("header-fixed");
    document.querySelector(".logo-normal").style.display = "none";
    document.querySelector(".logo-fixed").style.display = "block";
  }
  else {
    document.querySelector(".header").classList.remove("header-fixed");
    document.querySelector(".logo-normal").style.display = "block";
    document.querySelector(".logo-fixed").style.display = "none";
    document.querySelector(".header").animate([
      // keyframes
      { transform: 'translateY(0)' },
      { transform: 'translateY(-84px)' }
    ], {
        duration: .5
    });
  }

}
window.addEventListener("scroll", handleChangeHeader) 
