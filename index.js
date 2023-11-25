"use strict"

const switcher = document.querySelector(".btn");

switcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    document.body.classList.toggle("light-theme")

var classname = document.body.className;
if (classname == "light-theme"){
    this.textContent = "dark"
} 
else {
    this.textContent = "light"
}
console.log("class name: " + classname)
})