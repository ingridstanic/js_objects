import './style.css'

class Games {
  title;
  developer;
  releaseYear;
  genre;
  myRating;
  hoursPlayed;

  constructor(title, developer, releaseYear, genre, myRating, hoursPlayed) {
    this.title = title;
    this.developer = developer;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.myRating = myRating;
    this.hoursPlayed = hoursPlayed;
  }
}

class NewGames {
  title;
  developer;
  releaseYear;
  genre;
  myHypeLevel;
  status;

  constructor(title, developer, releaseYear, genre, myHypeLevel, status) {
    this.title = title;
    this.developer = developer;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.myHypeLevel = myHypeLevel;
    this.status = status;
  }
}

const rdr2 = new Games("Red Dead Redemption 2", "Rockstar Games", "2018", "Open World, Western, Action-adventure, Non-linear", "10+++", "433h");
const cp2077 = new Games("Cyberpunk 2077", "CD Project RED", "2020", "RPG, Open world, First-person shooter, Sci-Fi", "8.9", "209h");
const lou2 = new Games("Last of Us Part II", "Naughty Dog", "2020", "Action-adventure, Survival horror, Story-driven, Thrid-person shooter", "9.2", "152h");
const swo = new Games("Starwars Outlaws", "Massive Entertainment", "2024", "Action-adventure, Open World, Third-person shooter, Sci-Fi", "8.2", "131h");
const swjs = new Games("Starwars Jedi Survivor", "Respawn Entertainment", "2023", "Action-adventure, Third-person combat, Sci-Fi, Story-driven", "8.5", "95h");

const myTopGames = [rdr2, cp2077, lou2, swo, swjs];

const ds2 = new NewGames("Death Stranding 2", "Kojima Productions", "2025", "Action-adventure, Third-person shooter, Exploration, Sci-Fi", "7.0", "10% progression");
const aw2 = new NewGames("Alan Wake II", "Remedy Entertainment", "2023", "Survival horror, Third-person shooter, action-adventure, Mystery/thriller, Story-driven", "8.5", "Next game to play after finishing Death Stranding 2");
const goy = new NewGames("Ghost of Yotei", "Sucker Punch Productions", "2025", "Action-adventure, Historical-fiction, Samurai, Third-person combat, Stealth, Exploration", "9.5", "To be purchased");
const got = new NewGames("Ghost of Tsushima", "Sucker Punch Productions", "2020", "Action-adventure, Historical-fiction, Samurai, Third-person combat, Stealth, Exploration", "7.5", "Purchased");
const gta6 = new NewGames("Grand Theft Auto VI", "Rockstar Games", "2026", "Open world, Action-adventure, Non-linear, Third-person shooter, Crime", "10+++", "Waiting for release...");

const myToGames = [ds2, aw2, goy, got, gta6];

const header = document.createElement("header");
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const main = document.createElement("main");
const div = document.createElement("div");
const h4 = document.createElement("h4");
const div2 = document.createElement("div");

h1.className = "myHeader";
h1.innerHTML = "TopToGame+";
h2.innerHTML = "My Top 5";
div.className = "myTopFive";
h4.innerHTML = "My To 5"
div2.className = "myToFive";

document.body.prepend(header);
header.appendChild(h1);
document.body.appendChild(main);
main.appendChild(h2);
main.appendChild(div);
main.appendChild(h4);
main.appendChild(div2);

myTopGames.forEach((game) => {
  const card = document.createElement("div");
  const title = document.createElement("h3");
  const dev = document.createElement("p");
  const year = document.createElement("p")
  const genre = document.createElement("p");
  const rating = document.createElement("p");
  const hours = document.createElement("p");

  card.className = "gameCard";
  title.className = "gameTitle";
  title.innerHTML = game.title;
  dev.innerHTML = game.developer;
  year.innerHTML = "Release: " + game.releaseYear;
  genre.innerHTML = "Genre: " + game.genre;
  rating.innerHTML = "My rating: " + game.myRating;
  hours.innerHTML = "Hours played: " + game.hoursPlayed;

  card.appendChild(title);
  card.appendChild(dev);
  card.appendChild(year);
  card.appendChild(genre);
  card.appendChild(rating);
  card.appendChild(hours);
  div.appendChild(card);
})

myToGames.forEach((game) => {
  const card = document.createElement("div");
  const title = document.createElement("h5");
  const dev = document.createElement("p");
  const year = document.createElement("p");
  const genre = document.createElement("p");
  const hypeLevel = document.createElement("p");
  const status = document.createElement("p");

  card.className = "gameCard2";
  title.className = "gameTitle";
  title.innerHTML = game.title;
  dev.innerHTML = game.developer;
  year.innerHTML = "Release: " + game.releaseYear;
  genre.innerHTML = "Genre: " + game.genre;
  hypeLevel.innerHTML = "My hype level: " + game.myHypeLevel;
  status.innerHTML = "Status: " + game.status;

  card.appendChild(title);
  card.appendChild(dev);
  card.appendChild(year);
  card.appendChild(genre);
  card.appendChild(hypeLevel);
  card.appendChild(status);
  div2.appendChild(card);
})
