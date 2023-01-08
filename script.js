
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
