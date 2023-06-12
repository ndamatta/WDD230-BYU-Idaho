const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');

  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dob = document.createElement('p');
    let pob = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    dob.textContent = `Date of birth: ${prophet.birthdate}`
    pob.textContent = `Place of birth: ${prophet.birthplace}`

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(portrait);

    cards.appendChild(card);
  });
}

getProphetData();
