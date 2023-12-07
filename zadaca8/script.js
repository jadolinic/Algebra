"use strict";

// Zadatak 1. - Slijedeći HTML sintaksu, složi JS kod koji će klikom na button smanji broj u paragrafu smanjiti za 1, a klikom na button povećaj, povećati za 1.

const brojac = document.querySelector("p");
let broj = 0;

const povecanje = () => {
  broj++;
  brojac.textContent = broj;
};

const smanjivanje = () => {
  broj--;
  brojac.textContent = broj;
};

document.getElementById("povecaj").addEventListener("click", povecanje);
document.getElementById("smanji").addEventListener("click", smanjivanje);

/* Zadatak 2. Napravite funkciju pod nazivom suma koja prima 2 parametra, prvi neka bude lista brojeva 
a drugi callback funkcija koja se primjenjuje na svaki element liste (unutar funkcije 'suma').
Neka suma vrati novu listu popunjenu brojevima iz liste pomnoženima sa 2. */

const suma = (arr, cb) => arr.map(cb);
const umnozak = (broj) => broj ** 2;
const nizBrojeva = [1, 2, 3, 4, 5];

console.log(nizBrojeva, suma(nizBrojeva, umnozak));
