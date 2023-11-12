// Zadatak 1.

const prvi = "prvi";
let drugi = "drugi";
var treci = "treci";

let istina = true;

let nedefinirano;

console.log(prvi, drugi, treci, istina, nedefinirano);

// Zadatak 2.

let hrvatska = 3888529;

let podjelaPopulacije = hrvatska / 2;

let novaPopulacija = hrvatska + 1;

let slovenija = 2108977;

function istinitost(x, y) {
  return x > y
    ? "Hrvatska ima više stanovnika"
    : "Slovenija ima više stanovnika";
}

console.log(istinitost(hrvatska, slovenija));

// Zadatak 3.

let masaMarko1 = 78;
let visinaMarko1 = 169;

let masaJosip1 = 92;
let visinaJosip1 = 195;

let itmMarko1 = Math.round((masaMarko1 / visinaMarko1) ** 2 * 10 + 1);
let itmJosip1 = Math.round((masaJosip1 / visinaJosip1) ** 2 * 10 + 1);

console.log(
  `Test podaci 1 su iduci. ITM Marko: ${itmMarko1}, ITM Josip: ${itmJosip1} `
);
console.log(`Da li je Markov ITM veci od Josipovog: ${itmMarko1 > itmJosip1}`);

let masaMarko2 = 95;
let visinaMarko2 = 188;

let masaJosip2 = 85;
let visinaJosip2 = 176;

let itmMarko2 = Math.round((masaMarko2 / visinaMarko2) ** 2 * 10 + 1);
let itmJosip2 = Math.round((masaJosip2 / visinaJosip2) ** 2 * 10 + 1);

console.log(
  `Test podaci 2 su iduci. ITM Marko: ${itmMarko2}, ITM Josip: ${itmJosip2}`
);
console.log(`Da li je Markov ITM veci od Josipovog: ${itmMarko2 > itmJosip2}`);

// Zadatak 4.

let imeDrzave = "hrvatska";
let kontinent = "europa";
let populacija = 3888529;

console.log(
  `${imeDrzave} se nalazi na kontinentu ${kontinent} i ima populaciju od: ${populacija}`
);

// Zadatak 5.

let randomA = Math.trunc(Math.random() * 100 + 1);
let randomB = Math.trunc((Math.random() * (100 + 1)) / 2);

console.log(`Suma random brojeva je: ${randomA * randomB}
Razlika random brojeva je: ${Math.trunc(randomA / randomB)}`);
