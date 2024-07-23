window.addEventListener("load",function(){

	document.querySelector(".loader").classList.add("hidden");

});

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
	header.classList.toggle("sticky", window.scrollY > 0);

})


const sr = ScrollReveal ({
	distance: '30px', 
	duration: 2500,
	reset: true
});
sr.reveal('.home-text',{delay:200, origin:'left'});
sr.reveal('.home-img',{delay:200, origin:'right'});
sr.reveal('.intro, .about, .travel,.language, .contact',{delay:200, origin:'bottom'});