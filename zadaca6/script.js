"use strict";

// Zadatak 1.

const nameList = ["Ana", "Ivan", "Jakov", "Borna", "Petar"];

for (const ime of nameList) {
  if (ime === "Jakov") {
    console.log("Ime je super");
  } else {
    console.log(ime);
  }
}

// Zadatak 2.

for (let i = 1; i <= 4; i++) {
  console.log(`${i} petlja: `);
  for (let j = 5; j <= 10; j++) {
    console.log(j);
  }
}

// Zadatak 3.

const auti = [
  { ime: "Mercedes", kategorija: "limuzina", godinaProizvodnje: 2014 },
  { ime: "Ford", kategorija: "karavan", godinaProizvodnje: 2015 },
  { ime: "BMW", kategorija: "coupe", godinaProizvodnje: 2010 },
  { ime: "Volvo", kategorija: "SUV", godinaProizvodnje: 2011 },
  { ime: "Peugeot", kategorija: "limuzina", godinaProizvodnje: 2018 },
  { ime: "Range Rover", kategorija: "jeep", godinaProizvodnje: 2017 },
];

const listaLimuzina = auti.filter((val) => val.kategorija === "limuzina");

console.log(listaLimuzina);

// Bonus

const listaAutaPoGodinama = auti.filter(
  (e) => e.godinaProizvodnje > 2016 && e.godinaProizvodnje < 2020
);

console.log(listaAutaPoGodinama);

// Zadatak 4.

let racuni = [125, 555, 444, 585];
let listaNapojnica = [15, 30, 28, 42];

function izracunSume(lista) {
  const listaSuma = [];
  let sum = 0;
  for (const x of lista) {
    sum += x;
  }
  listaSuma.push(sum);
  return listaSuma;
}
console.log(izracunSume(racuni));
console.log(izracunSume(listaNapojnica));
