// window.onload = alert("test");

function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const punctuation = ["!", "!!", "!!!", "?!", "."];

// intro phrase

const buzzword = [
  "cancer",
  "migrants",
  "rapists",
  "murderers",
  "crime",
  "death",
  "AIDS"
];

function buzzwordTitle() {
  let buzzword1 = randomArrayItem(buzzword);
  document.getElementById("buzzword").textContent =
    buzzword1.toUpperCase() + randomArrayItem(punctuation);
}

// first phrase

const noun1 = [
  "Price",
  "Quality of life",
  "Life expectancy",
  "Quantity",
  "Cost",
  "Quality",
  "Employment"
];

// ...of...

const noun2 = [
  "potatoes",
  "tea",
  "Boris Johnson",
  "immigrants",
  "the elderly",
  "private schools",
  "stay-at-home mothers",
  "cancer",
  "fish and chips",
  "newspapers",
  "British comedians",
  "asylum seekers"
];

const verb1 = [
  "plummets",
  "skyrockets",
  "decimated",
  "crashes",
  "nose-dives",
  "dips",
  "collapses",
  "slumps",
  "booms",
  "explodes"
];

const connectingPhrase = ["because of", "due to", "as a result of"];

const noun3 = [
  "Brexit",
  "immigrants",
  "the weather",
  "climate change",
  "Muslims",
  "ethnic minorities",
  "millenials",
  "school children",
  "baby boomers",
  "the pope",
  "state schools",
  "single mothers",
  "race mixing",
  "British panel shows"
];

function constructPhrase() {
  let phrase =
    randomArrayItem(noun1) +
    " of " +
    randomArrayItem(noun2) +
    " " +
    randomArrayItem(verb1) +
    " " +
    randomArrayItem(connectingPhrase) +
    " " +
    randomArrayItem(noun3) +
    randomArrayItem(punctuation);
  document.getElementById("headline").textContent = phrase;
}

// second phrase

// Brexit means...

const brexit = [
  "Brexit",
  "breakfast",
  "death",
  "Boris",
  "cancer",
  "immigrants",
  "apartheid"
];

function brexitMeans() {
  let phrase =
    "Brexit means " + randomArrayItem(brexit) + randomArrayItem(punctuation);
  document.getElementById("headline2").textContent = phrase;
}

// third phrase

const singularNoun = [
  "cancer",
  "abortion",
  "gluten",
  "autism",
  "IBS",
  "kombucha",
  "rabies"
];

const pluralNoun = [
  "toxins",
  "babies",
  "creationists",
  "carbohydrates",
  "antioxidants",
  "vaccinations",
  "feminists",
  "microgreens"
];

function flipCoin(heads, tails) {
  if (Math.floor(Math.random() * 10) % 2 === 0) {
    return heads();
  } else {
    return tails();
  }
}

function constructPhrase2() {
  let firstWord = randomArrayItem(pluralNoun);
  let phrase =
    firstWord.slice(0, 1).toUpperCase() +
    firstWord.slice(1, firstWord.length) +
    " cause " +
    randomArrayItem(singularNoun) +
    randomArrayItem(punctuation);
  document.getElementById("headline2").textContent = phrase;
}

function runFunctions() {
  constructPhrase();
  flipCoin(brexitMeans, constructPhrase2);
  buzzwordTitle();
}

window.onload = runFunctions();
document.getElementById("refresh").addEventListener("click", runFunctions);
