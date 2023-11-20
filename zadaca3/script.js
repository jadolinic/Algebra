"use strict";

// Zadatak 1.

const lovci = 7900;
const brojLovaca1 = 3840;
const brojLovaca2 = 500;
const brojLovaca3 = 1440;

const rezultat = (brojLovaca, ukupnoLovci) =>
  Math.round((brojLovaca / ukupnoLovci) * 100);

console.log(
  `Iz središnje hrvatske dolazi ${rezultat(brojLovaca1, lovci)}% lovaca`
);
console.log(`Iz Istre hrvatske dolazi ${rezultat(brojLovaca2, lovci)}% lovaca`);
console.log(
  `Iz Dalmacije hrvatske dolazi ${rezultat(brojLovaca3, lovci)}% lovaca`
);

// Zadatak 2.

const postotak = (populacija) => (populacija / 1e4) * 100;
const stolniTenis = (zemlja, populacija) => {
  const postotak2 = postotak(populacija);
  console.log(
    `${zemlja} ima ${populacija} igraca stolnog tenisa što je ${postotak2}% svijeta`
  );
};

stolniTenis("hrvatska", 10);

// Zadatak 3.

const prosjekReal = [3, 4, 3, 5, 4, 5].reduce((x, y) => x + y, 0) / 6;
const prosjekBarca = [1, 2, 1, 2, 2, 4].reduce((x, y) => x + y, 0) / 6;

const ispis2 = (real, barca) =>
  real >= barca * 2
    ? `Real je sa prosjekom od ${prosjekReal} golova pobjedio Barcu koja ima prosječno ${prosjekBarca} golova po utakmici`
    : "Barca pobjeđuje";

ispis2(prosjekReal, prosjekBarca);
