// variables for random song/start time
var rnd = 0;
var rndPrev = 0;
var startTime = 0;

let videos = [""];
let titles = [""];
let songTitles = [""]

function init() {
    var prevbutton = document.getElementById("prev");
    var playbutton = document.getElementById("play-pause");
    var replaybutton = document.getElementById("replay");
    var nextbutton = document.getElementById("next");
    // var randomStart = document.getElementById("random");
    // var navbutton = document.getElementById("nav");

    prevbutton.addEventListener("click", prev);
    playbutton.addEventListener("click", playPause);
    replaybutton.addEventListener("click", replay);
    nextbutton.addEventListener("click", next);
    // navbutton.addEventListener("click", settings);
}

var player;

function onYouTubeIframeAPIReady() {
    rnd = rndVideo()
    rndPrev = rnd;
    startTime = rndStart();

    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videos[rnd],
        playerVars: {
            'start': startTime
        }
    });

    document.getElementById("anime-title").innerHTML = titles[rnd]
}

function prev() {
    document.getElementById("anime-title").innerHTML = titles[rndPrev]
    player.loadVideoById(videos[rndPrev], 5, "large");
}

function playPause() {
    if (player.getPlayerState() == 2 || player.getPlayerState() == -1 || player.getPlayerState() == 5) {
        player.playVideo();
        document.getElementById("play-pause").setAttribute("src", "Images/pause.png");
        document.getElementById("play-pause").setAttribute("alt", "pause-button");
    }
    else if (player.getPlayerState() == 1) {
        player.pauseVideo();
        document.getElementById("play-pause").setAttribute("src", "Images/play.png");
        document.getElementById("play-pause").setAttribute("alt", "play-button");

    }
}

function next() {
    rnd = rndVideo();
    startTime = rndStart();

    while (rnd == rndPrev) {
        rnd = rndVideo();
    }
    // rndPrev = rnd;
    document.getElementById("anime-title").innerHTML = titles[rnd]
    player.loadVideoById(videos[rnd], startTime);
}

function replay() {
    player.seekTo(startTime);
}

function settings() {
    var content = document.getElementById("settings");

    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }    
}

function rndVideo() {
    return Math.floor(Math.random() * videos.length);
}

function rndStart() {
    return (15 + Math.floor(Math.random() * 15));
}

window.onload = init;