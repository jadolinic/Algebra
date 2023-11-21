"use strict";

// Zadatak 1. - Moderirana verzija umjesto prijašnjeg SWITCH-a

const postotak = (populacija) => (populacija / 1e4) * 100;
const stolniTenis = (zemlja, populacija) => {
  const postotak2 = postotak(populacija);
  console.log(
    `${zemlja} ima ${populacija} igraca stolnog tenisa što je ${postotak2}% svijeta`
  );
};

stolniTenis("hrvatska", 10);

// Zadatak 3.

let racuni = [125, 555, 444];
let listaNapojnica = [];

const izracunNapojnica = racuni.map((racun) =>
  racun >= 50 && racun <= 300
    ? listaNapojnica.push((15 / 100) * racun)
    : listaNapojnica.push((20 / 100) * racun)
);
const listTotal = racuni.map((x, index) => x + listaNapojnica[index]);

const ispis = racuni.map((x, index) =>
  console.log(
    `Za račun od ${x}$ ide napojnica od ${listaNapojnica[index]}$ te njegov total je: ${listTotal[index]}$`
  )
);
