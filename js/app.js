// Info
const videoLink =
  "https://github.com/ArticPolarDEV/demonslayerbr/raw/draft/serene-kapitsa/eps/temp3/ds3ep1.mp4";
const episode = "1";
const season = "3";

// Get Elements
var sectionText = document.getElementById("sectionText");
var PageTitle = document.getElementById("PageTitle");
var videoPlayer = document.getElementById("videoPlayer");

// Set Episode and Season Text
sectionText.innerHTML = `Temporada ${season} - Episódio ${episode}`;

// Set Page Title
PageTitle.innerHTML = `Demon Slayer (Temporada ${season} - Episódio ${episode})`;

//Set Video URL in Video Player
videoPlayer.src = videoLink;

// Start the Plyr Player
var player = new Plyr("#videoPlayer");
