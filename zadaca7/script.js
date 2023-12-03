"use strict";

// Zadatak 1.

let data = [
  {
    name: "Marko",
    age: "30",
  },
  {
    name: "Luka",
    age: "32",
  },
  {
    name: "Ivan",
    age: "24",
  },
  {
    name: "Stjepan",
    age: "33",
  },
  {
    name: "Domagoj",
    age: "22",
  },
  {
    name: "Kristijan",
    age: "25",
  },
];

const info = document.querySelector("#info");

function izvlacenje() {
  data.map((e) => {
    const tekst = document.createElement("p");
    tekst.innerText = `${e.name} ima ${e.age} godina`;
    info.appendChild(tekst);
  });
}

izvlacenje();

// Zadatak 2.

const izmjena = document.querySelector("#circle");

izmjena.addEventListener("click", () => {
  izmjena.style.color = "#fff";
  izmjena.style.background = "blue";
  izmjena.style.marginTop = "3rem";
  izmjena.style.marginLeft = "6rem";
});

// Zadatak 3.

const promjeniBoju = document.querySelector("button");
const boje = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];
let index = 0;

promjeniBoju.addEventListener("click", () => {
  const bojaPozadine = document.querySelector("html");
  bojaPozadine.style.background = boje[index];
  index = (index + 1) % boje.length;
});
