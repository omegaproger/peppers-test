var link = document.querySelectorAll(".pagination__link")
console.log(link);
for(var i = 0; i < link.length; i++) {
       link[i].addEventListener("click", bindClick(i));
}
function bindClick(i) {
  return function() {
    	for(var i = 0; i < link.length; i++) {
       link[i].style.backgroundColor = "#FFF100";
       link[i].style.transform = 'scale(1)';
		}
    	// this.classList.add("pagination__active");
    	this.style.backgroundColor = '#000000';
    	this.style.transform = 'scale(1.5)';
  };
}
// link.addEventListener("click",function(){
// 	this.classList.toggle("pagination__active");
// 	this.style.backgroundColor = '#000000';

// });