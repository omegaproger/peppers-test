
const swiper = new Swiper('.buy__swiper', {
effect: "coverflow",
speed: 400,
centerSlides:true,
loop:false,
resistance:false,
slidesPerView:4,
spaceBetween:10,
centerInsufficientSlides:true,
coverflowEffect: {
  rotate: 0,
  stretch: 0,
  depth: 180,
  modifier: 3,
  slideShadows: false,
},
resizeObserver:false,
setWrapperSize:true,
breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: -260,
      coverflowEffect: {
			  modifier: 4,
			},
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      spaceBetween: -260,
      coverflowEffect: {
			  modifier: 4,
			},
    },
    // when window width is >= 640px
    1024: {

      slidesPerView: 4,
      spaceBetween: 20,
      coverflowEffect: {
			  modifier: 0,
			},
    }
}

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

// var item = document.querySelectorAll(".cart")
// console.log(item);
// var slide = document.querySelectorAll(".swiper-slide")
// console.log(slide);
// // var slidActive = document.querySelector(".swiper-slide-active")
// // console.log(slidActive);
// for(var i = 0; i < slide.length; i++) {
//        slide[i].querySelector(".cart").addEventListener("click", cartClick(i));
// }

// 	function cartClick(i) {
// 	  return function() {
	    	
// 	    	for(var i = 0; i < slide.length; i++) {
// 	       slide[i].querySelector(".cart").classList.remove("cart_active");
// 			}
// 		    	this.classList.toggle("cart_active");
				 		
// 	    	// if(this.classList.contains("cart_active") === false){
// 	    	// 	this.classList.add("cart_active");
// 	    	// }
// 	    	// else  {
// 	    	// 	this.classList.remove("cart_active");
// 	    	// }	    	
// 	  };
// 	}

// for(var i = 0; i < item.length; i++) {
//        item[i].addEventListener("click", bindClick(i));
// }
// function bindClick(i) {
//   return function() {
//     	for(var i = 0; i < item.length; i++) {
//        item[i].classList.remove("cart_active");
// 		}
//     	this.classList.toggle("cart_active");	

//     	// if(this.classList.contains("cart_active") === false){
//     	// 	this.classList.add("cart_active");
//     	// }
//     	// else  {
//     	// 	this.classList.remove("cart_active");
//     	// }
    	

//   };
// }	

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