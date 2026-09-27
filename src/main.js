const charactersGrid = document.querySelector(".characters-grid");

async function getCharacters() {
  const response = await fetch(
    "https://hp-api.onrender.com/api/characters/students",
  );
  const data = await response.json();

  drawCards(data.slice(0, 8));
}

function drawCards(character) {
  const htmlCards = character
    .map((character) => {
      const imageSrc = character.image || "/src/assets/placeholder.jpg";
      return `
            <li class="characters-grid-card">
              <div class="card-front">
                <div
                  class="card-img"
                  style="background-image: url('${imageSrc}')"
                ></div>
                <h3 class="card-title" lang="en">${character.name}</h3>
                <div class="card-text">
                  <p>${character.alternate_names[0] || "No name"}</p>
                  <p>${character.house || "No house"}</p>
                  <p>${character.dateOfBirth || "Unknown"}</p>
                </div>
                <button type="button" class="card-more-btn">
                  <span>Більше інформації</span>
                  <img
                    src="/src/assets/arrow-right.svg"
                    alt="Arrow right with a yellow circle"
                  />
                </button>
              </div>
              <div class="card-back">
                <ul class="card-details-list">
                  <li>Name: <span>${character.name || "Unknown"}</span></li>
                  <li>
                    Alternate names:
                    <span>${character.alternate_names?.length ? character.alternate_names.join(", ") : "No name"}</span>
                  </li>
                  <li>Species: <span>${character.species || "Unknown"}</span></li>
                  <li>Gend: <span>${character.gender || "Unknown"}</span></li>
                  <li>House: <span>${character.house || "Unknown"}</span></li>
                  <li>Date of birth: <span>${character.dateOfBirth || "Unknown"}</span></li>
                  <li>Year of birth: <span>${character.yearOfBirth || "Unknown"}</span></li>
                  <li>Wizard: <span>${character.wizard ? "True" : "False"}</span></li>
                  <li>Ancestry: <span>${character.ancestry || "Unknown"}</span></li>
                  <li>Eye colour: <span>${character.eyeColour || "Unknown"}</span></li>
                  <li>Hair colour: <span>${character.hairColour || "Unknown"}</span></li>
                  <li>
                    Wand:
                    <span>
                      Wood : ${character.wand?.wood || "none"}, core : ${character.wand?.core || "none"}, length : ${character.wand?.length || "none"}
                    </span>
                  </li>
                  <li>Patronus: <span>${character.patronus || "Unknown"}</span></li>
                  <li>Hogwarts student: <span>${character.hogwartsStudent ? "True" : "False"}</span></li>
                  <li>Hogwarts staff: <span>${character.hogwartsStaff ? "True" : "False"}</span></li>
                  <li>Actor: <span>${character.actor || "Unknown"}</span></li>
                  <li>Alive: <span>${character.alive ? "True" : "False"}</span></li>
                </ul>
              </div>
            </li>`;
    })
    .join("");

  charactersGrid.innerHTML = htmlCards;
}

getCharacters();
