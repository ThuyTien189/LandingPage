function handleChangeHeader() {
  let changePosition = document.querySelector(".store").offsetTop;
  if(window.scrollY >= changePosition) {
    document.querySelector(".header").classList.add("header-fixed");
    document.querySelector(".logo-normal").style.display = "none";
    document.querySelector(".logo-fixed").style.display = "block";
    document.querySelector(".intro").style.paddingTop = "84px";
    document.querySelector(".scrollUp").style.display = "block";
  }
  else {
    document.querySelector(".header").classList.remove("header-fixed");
    document.querySelector(".logo-normal").style.display = "block";
    document.querySelector(".logo-fixed").style.display = "none";
    document.querySelector(".intro").style.paddingTop = "0";
    document.querySelector(".scrollUp").style.display = "none";
  }
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let isCounted = [true,true,true,true]
function numberCounter(qSeclector, start = 0, end, duration = 1000) {
  let changePosition = document.querySelector(".number").offsetTop - window.innerHeight;
  console.log(scrollY, changePosition)
  const target = document.querySelector(qSeclector)
  if(isInViewport(target) && (isCounted.find(val => val === true))) {
      for(let i = 0; i < isCounted.length; i++) {
        if(isCounted[i] ) {
          isCounted[i] = false;
          break;
        }
      }
      let startTimestamp = null;
      const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      target.innerText = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
      };
    window.requestAnimationFrame(step);
  }
}
function slideShow() {
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 739,
        settings: {
        slidesToShow: 3
      }
      },
      {
        breakpoint: 574,
        settings: {
        slidesToShow: 2
      }
      },
      {
        breakpoint: 490,
        settings: {
        slidesToShow: 1
        }
      }
       ]
  });
}
$(document).ready(slideShow)

window.addEventListener("scroll", handleChangeHeader) 

window.addEventListener("scroll", () => {
  numberCounter("#number1", 0, 10, 1000)
  numberCounter("#number2", 0, 23, 1000)
  numberCounter("#number3", 0, 9, 1000)
  numberCounter("#number4", 0, 12, 1000)
}, 
  {passive: true}
);
AOS.init();

const cb_showMenu = document.querySelector(".cb_showMenu");
cb_showMenu.addEventListener("click", () => {
  if(cb_showMenu.checked) {
    document.querySelector(".menu-tablet-icon").style.transform = "rotate(360deg)";
    document.querySelector(".menu-tablet-icon").style.transitionDuration = ".3s";
    document.querySelector(".nav-inner").classList.remove('nav-inner-hide-animation')
    document.querySelector(".menu-tablet").style.display = "block";
    $('body').css({overflow: "hidden"})
    cb_showMenu.checked = false; 
  } 
})
const cb_hideMenu = document.querySelector(".cb_closeMenu");
  cb_hideMenu.addEventListener("click", () => {
  if(cb_hideMenu.checked) {
    setTimeout(() => {
      document.querySelector(".menu-tablet").style.display = "none";
    },"300")
    $('body').css({overflow: "unset"})
    cb_hideMenu.checked = false;
    document.querySelector(".nav-inner").classList.add('nav-inner-hide-animation')
  } 
})