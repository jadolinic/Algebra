"use strict";

const pretrazi = document.querySelector('input[type="text"]');
let lista = document.querySelector(".lista-izvodaca");
const loader = document.getElementById("loader");

pretrazi.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    lista.innerHTML = ""; // Postavljanje inicijalnog stanja liste tako da se "refresha" prilikom svakog poziva umjesto nadodavanja na svaku listu
    loader.style.display = "block"; // prikazivanje loadera

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${e.target.value}&entity=song`
      );
      const data = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 1500)); // postavljanje duljine prikazivanje loadera dok "fetcha" podatke

      if (data.resultCount === 0) {
        alert("Nema rezultata za traženi izraz");
      } else {
        const info = data.results;

        info.forEach((value) => {
          const li = document.createElement("li");
          li.innerHTML = `<p><span>Artist:</span></br> ${value.artistName}</p>
                          <p><span>Track:</span></br> ${value.trackName}</p>
                          <img src="${value.artworkUrl100}" alt="logo">`;
          lista.appendChild(li);
        });
      }
    } catch (error) {
      console.log(error);
      const errorUtterance = new SpeechSynthesisUtterance(); // Korištenje Voice API-a da ukoliko dohvati grešku da kaže text koristeći hrvatski naglasak. Radit će ovisno o verziji browsera, inače defaultni jezik je en
      errorUtterance.text = "Something went wrong. Please try again";
      window.speechSynthesis.speak(errorUtterance); // bacit će error na prazan upit
    } finally {
      loader.style.display = "none"; //Nakon što su vraćeni podaci vrati prikaz loadera na "none"
    }

    e.target.value = ""; // resetiraj search input value nakon entera
  }
});
