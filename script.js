// window.onload = alert("test");

// first phrase

const noun1 = [
  "Price",
  "Quality of life",
  "Life expectancy",
  "Quantity",
  "Cost",
  "Quality",
  "Employment rates"
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
  "British comedians"
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

const punctuation = ["!", "!!", "!!!", "?!", "."];

function randomArrayItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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

window.onload = constructPhrase();

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

window.onload = brexitMeans();
