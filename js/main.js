
const swiper = new Swiper('.buy__swiper', {
effect: "coverflow",

centerSlides:true,
loop:false,coverflowEffect: {
  rotate: 0,
  stretch: 180,
  depth: 150,
  modifier: 1,
  slideShadows: false,
},

breakpoints: {

    320: {
      slidesPerView: 'auto',
    },

    1024: {
      slidesPerView: 4,
      // slidesPerGroup: 4,
      effect: 'none',
    }
}

});

const winSwiper = new Swiper('.winners__swiper', {
  speed: 400,
  spaceBetween: 150,
  effect: 'coverflow',
  slidesPerView: 1,
  // loop:true,
  coverflowEffect: {
    rotate: 1,
    stretch: 0,
    depth: 180,
    modifier: 0,
    slideShadows: false,
  },
  breakpoints: {

    1024: {
      effect:'fade',
      fadeEffect: {
        crossFade: true
      },
    }
}

});

const smallSwiper = new Swiper('.winners__small-swiper', {
  // speed: 400,
  spaceBetween: 0,
  effect: 'coverflow',
  slidesPerView: 4,
  direction:'vertical',
  centerSlides:true,
  // loop:true,
  coverflowEffect: {
    rotate: 1,
    stretch: 0,
    depth: 180,
    modifier: 0,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});

const swipeAllSliders = (index) => {
  winSwiper.slideToLoop(index);
  smallSwiper.slideToLoop(index);
};

// winSwiper.on('slideChange', () => swipeAllSliders(winSwiper.realIndex));
smallSwiper.on('slideChange', () => swipeAllSliders(smallSwiper.realIndex));

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