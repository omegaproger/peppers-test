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




// link.addEventListener("click",function(){
// 	this.classList.toggle("pagination__active");
// 	this.style.backgroundColor = '#000000';

// });