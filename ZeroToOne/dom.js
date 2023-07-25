"use strict";

// Accesing the element
// 1.) get Elements by tag name

const allH1 = document.getElementsByTagName("h1");
// console.log(allH1[1]);

// byID
const para = document.getElementById("para");
// console.log(para);

// Class name
const link = document.getElementsByClassName("main__link");
// console.log(link);

// querySelector
const mainHeading = document.querySelector(".main__link");
// console.log(mainHeading);

// querySelectorAll
const allAnchors = document.querySelectorAll(".main__link");
// console.log(allAnchors);

// ==========(few more ways of accesing the element based on)=========================

// 1.) parentNode => returns you the parent of the children
// 2.) childNodes => returns you the childre of the parent
// 3.) nextElementSiblings => next sibling of an element
// 4.) previousElementSiblings => previous sibling of an element

const heading = document.querySelector(".container__heading");
// console.log(heading.previousElementSibling);
const container = document.querySelector(".container");
// console.log(container.childNodes);

// ==============   (Part 2)    ===============================================
// Manipulating the data of elements
const head = document.querySelector(".heading-primary");
// head.innerHTML = "Codeblock's javascript is amazing!";

// head.style.backgroundColor = "orange";
// head.style.fontSize = "50px";

// head.classList.add("active");
// head.classList.remove("heading-primary");

// ==============   (Part 3)    ===============================================

// Creating an element using javascript
const div = document.createElement("div");
const body = document.querySelector("body");
div.classList.add("container");

const p = document.createElement("p");
p.classList.add("container__text");
p.setAttribute("id", "container-para");

p.innerHTML = "I am a paragraph";

const img = document.createElement("img");
// img.setAttribute(
//     "src",
//     "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
// );
// img.setAttribute("alt", "Random Image");
// img.src =
//     "https://images.unsplash.com/photo-1683009427598-9c21a169f98f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60";

// img.alt = "Random image";

// div.appendChild(p);
// div.appendChild(img);
// body.appendChild(div);

// const parentDiv = document.querySelector(".parent");
// const newPara = document.createElement("p");
// newPara.innerHTML = "This is my first paragraph about john wick";

// const anotherPara = document.createElement("p");
// anotherPara.innerHTML = "This is my second paragraph";

// parentDiv.appendChild(newPara);
// parentDiv.insertAdjacentElement("afterend", anotherPara);

// ==============   (Part 4)   ===============================================

// Adding event listeners for listening to events such as click, mouseover etc.

// click
const button = document.querySelector("#btn");

const doThis = function () {
    console.log("I was clicked");
};

button.addEventListener("click", doThis);

// submit
const form = document.getElementById("form");
const log = document.getElementById("log");

form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
    log.innerHTML = `<h1>The current timestamp of the form submittion is ${event.timeStamp}</h1>`;
});
// keypress
const input = document.querySelector(".enter");
input.addEventListener("keypress", (event) => {
    console.log(event);
    console.log(`key was presses, ${event.key}`);
});

// mouseevents
const headingMain = document.querySelector("#heading-primary");

headingMain.addEventListener("mouseover", () => {
    headingMain.style.color = "orange";
});
