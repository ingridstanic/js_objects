import './style.css'

class MyTopGames {
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
const header = document.createElement("header");
const h1 = document.createElement("h1");

h1.className = "myHeader";
h1.innerHTML = "TopToGame+";

header.appendChild(h1);
document.body.prepend(header);
