"use strict";

// Zadatak 1.

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
  {
    ime: "James Hetfield",
    uloga: "pjevač",
    datumRodenja: "3.8.1963",
  },
];

// Zadatak 2.

class Korisnici {
  constructor(ime, visina, tezina) {
    this.ime = ime;
    this.visina = visina;
    this.tezina = tezina;
  }
  izracunITM(tezina, visina) {
    this.itm = tezina / visina ** 2;
    return this.itm;
  }
}

const korisnik1 = new Korisnici("Marko", 1.69, 78);
const korisnik2 = new Korisnici("Josip", 1.95, 92);

korisnik1.izracunITM(korisnik1.tezina, korisnik1.visina);
korisnik2.izracunITM(korisnik2.tezina, korisnik2.visina);

console.table(korisnik1);
console.table(korisnik2);

console.log(
  `Josipov ITM (${korisnik1.itm}) je veći od Markovog (${korisnik2.itm})`
);
