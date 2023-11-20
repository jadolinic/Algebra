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

const svijet = 1e4;
const hrvatska = 10;
const kina = 3441;
const usa = 332;
const zemlja = "";

const postotak = (brojIgraca, ukupnoIgraca) =>
  (brojIgraca / ukupnoIgraca) * 100;

const hrvatskaPostotak = postotak(hrvatska, svijet);
const kinaPostotak = postotak(kina, svijet);
const usaPostotak = postotak(usa, svijet);

const ispis = (zemlja, populacija) => {
  switch (zemlja) {
    case "hrvatska":
      console.log(
        `${zemlja} ima ${populacija} igraca stolnog tenisa što je ${hrvatskaPostotak}% svijeta`
      );
      break;
    case "kina":
      console.log(
        `${zemlja} ima ${populacija} igraca stolnog tenisa što je ${kinaPostotak}% svijeta`
      );
      break;
    case "usa":
      console.log(
        `${zemlja} ima ${populacija} igraca stolnog tenisa što je ${usaPostotak}% svijeta`
      );
      break;
    default:
      console.error("Krivu ste zemlju upisali");
  }
};

ispis("hrvatska", 10); // Može se unijeti bilo koja od tri zemlje.

// Zadatak 3.

const prosjekReal = [3, 4, 3, 5, 4, 5].reduce((x, y) => x + y, 0) / 6;
const prosjekBarca = [1, 2, 1, 2, 2, 4].reduce((x, y) => x + y, 0) / 6;

const ispis2 = (real, barca) =>
  real >= barca * 2
    ? `Real je sa prosjekom od ${prosjekReal} golova pobjedio Barcu koja ima prosječno ${prosjekBarca} golova po utakmici`
    : "Barca pobjeđuje";

ispis2(prosjekReal, prosjekBarca);
