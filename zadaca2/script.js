// Zadatak 1¸

const masaMarko = Number(prompt("Unesi masu Marka"));
const visinaMarko = Number(prompt("Unesi visinu Marka"));

const masaJosip = Number(prompt("Unesi masu Josipa"));
const visinaJosip = Number(prompt("Unesi visinu Josipa"));

const itmMarko = Math.round((masaMarko / visinaMarko) ** 2 * 10 + 1);
const itmJosip = Math.round((masaJosip / visinaJosip) ** 2 * 10 + 1);

const provjera = (x, y) =>
  x > y
    ? `Markov ITM od ${itmMarko} je veći od Josipovog koji je ${itmJosip} `
    : `Josipov ITM od ${itmJosip} je veći od Markovog koji je ${itmMarko}`;

provjera(itmMarko, itmJosip);

// Zadatak 2.

const zemlja = (jezik, stanovnistvo, otok) =>
  jezik == "engleski" && stanovnistvo < 50e6 && otok == false
    ? "Zemlja u kojoj želite živjeti je Hrvatska"
    : "Hrvatska nije za vas";

zemlja("hrvatski", 3e6, false);
