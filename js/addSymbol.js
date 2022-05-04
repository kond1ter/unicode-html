
let max_scrolled = 1;
let count = 0


window.addEventListener("scroll", function() {
	const height = 500
	const scrolled = window.scrollY;
	const pos = height + scrolled;
	
	if (max_scrolled < pos) {
		for (let i = 1+300*count; i < 300*(count+1)+1; i++){
			console.log("gen")
			let htmlContent = "<div class='section__item'><div class='item__symbol'>&#" + i +";</div><div class='item__code'>#" + i + "</div></div>"
			document.getElementById("section").innerHTML += htmlContent;	
		}
		count += 1
		max_scrolled += 950;
	}
}) 

