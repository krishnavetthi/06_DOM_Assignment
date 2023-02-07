let logo = document.querySelector(".logo");
console.log(logo);
logo.src="./assets/ineuron-logo.png";

let num = document.querySelector(".app_price span")
num.textContent="$10"

let icon = document.querySelector(".footer_social_ico");
let clone = icon.cloneNode(true);
console.log(clone);

let iclass = clone.querySelector("i");
console.log(iclass);

iclass.classList.remove("fa-square-facebook");
console.log(iclass);

iclass.classList.add("fa-linkedin");
console.log(iclass);
document.querySelector(".footer_social").appendChild(clone);