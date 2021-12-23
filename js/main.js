const swiper = new Swiper('.swiper', {
  effect: "coverflow",
  speed: 400,
  spaceBetween: 100,
  centerSlides:false,
  loop:false,
  resistance:false,
  slidesPerView:1,
  spaceBetween:-180,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 6,
    slideShadows: false,
  },
  resizeObserver:false,
  setWrapperSize:true,
  
});


var intElemScrollTop = document.scrollTop;
console.log(intElemScrollTop);
var link = document.querySelectorAll(".pagination__item")
console.log(link);
for(var i = 0; i < link.length; i++) {
       link[i].addEventListener("click", bindClick(i));
}
function bindClick(i) {
  return function() {
    	for(var i = 0; i < link.length; i++) {
       link[i].classList.remove("pagination__item_active");
		}
    	// this.classList.add("pagination__active");
    	this.classList.add("pagination__item_active")
  };
}
	
  // import Swiper from 'swiper/bundle';

 
  // import 'swiper/css/bundle';


  // init Swiper:




// Now you can use all slider methods like
// const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();


// link.addEventListener("click",function(){
// 	this.classList.toggle("pagination__active");
// 	this.style.backgroundColor = '#000000';

// });