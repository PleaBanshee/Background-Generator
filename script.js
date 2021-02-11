var css = document.querySelector("h3");
var color1 = document.querySelector(".color1"); // you can use querySelector to select any element, classes and ids
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

let setColorProp = (color1,color2) => {
	body.style.background = 
	"linear-gradient(to right," 
	+ color1
	+ "," 
	+ color2
	+ ")";
}

let randomColours = () => {
	let colours = ntc.names
	const random1 = Math.floor(Math.random() * colours.length);
	const random2 = Math.floor(Math.random() * colours.length);
	let colour1 = colours[random1][1];
	let colour1_code = `#${colours[random1][0]}`;
	let colour2 = colours[random2][1];
	let colour2_code = `#${colours[random2][0]}`;
	setColorProp(colour1_code,colour2_code)
	css.innerText = `linear-gradient(to right, ( ${colour1_code} , ${colour1}) , ( ${colour2_code} , ${colour2}) )`;
	color1.value = colour1_code;
	color2.value = colour2_code;
}

let hover = () => {
	btn.classList.toggle("change-border");
}

let leave = () => {
	btn.classList.toggle("change-border", false);
}

function setGradient() {
	let cl1 = ntc.name(color1.value)
	let cl2 = ntc.name(color2.value)
	setColorProp(color1.value, color2.value)
	css.innerText = `linear-gradient(to right, ( ${color1.value} , ${cl1[1]}) , ( ${color2.value} , ${cl2[1]}) )`; // .textContent: returns the text content of all elements
}

color1.addEventListener("input", setGradient); // event fires when value of input element has been changed
color2.addEventListener("input", setGradient);
btn.addEventListener("click", randomColours);
btn.addEventListener("mouseover", hover);
btn.addEventListener("mouseleave",leave);