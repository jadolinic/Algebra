"use strict";

// Zadatak 1.

/* Imamo listu album i jedan objekt u toj listi. Napravi novi objekt i dodaj ga na u listu kao drugog
člana liste (ali isto kao objekt) */

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

/* Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina.
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime

logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm */

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
