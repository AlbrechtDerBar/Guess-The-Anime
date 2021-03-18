// variables for random song/start time
var rnd = 0;
var rndPrev = 0;
var startTime = 0;

let videos = ["SohCAjC-Npk", "0H_RCGEcjhs", "tF4faMbs5oQ"];
let titles = ["Dr. Stone", "inward", "Yeuh"];
let songTitles = ["\"Sangenshoku (三原色)\" by PELICAN FANCLUB"]

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
    // startTime = rndTime();
    rndStart();

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


// random function for video and start time
function rndVideo() {
    return Math.floor(Math.random() * videos.length);
}

function rndTime() {
    return (15 + Math.floor(Math.random() * 15));
}


// functions for the music controls
function next() {
    rnd = rndVideo();
    startTime = rndStart();

    while (rnd == rndPrev) {
        rnd = rndVideo();
    }
    // rndPrev = rnd;
    document.getElementById("anime-title").innerHTML = titles[rnd]
    if (player.getPlayerState() == 1) {
        player.loadVideoById(videos[rnd], startTime);
    }
    else if (player.getPlayerState() == 2) {
        player.cueVideoById(videos[rnd], startTime);
    }
    
    hideAnime();
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

function prev() {
    document.getElementById("anime-title").innerHTML = titles[rndPrev]
    player.cueVideoById(videos[rndPrev], 5, "large");
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


// functions for settings
function rndStart() {
    if (document.getElementById("random").checked) {
        return startTime = rndTime();
    }
}

function playTime() {

}

function songTitle() {
    var includesongTitleFull = document.getElementById("includeSongNameFull");

    if (includesongTitleFull.hasAttribute("disabled")) {
        includesongTitleFull.disabled = false;
    }
    else {
        includesongTitleFull.disabled = true;
    }
}

function songTitleFull() {

}


// show anime button
function showAnime() {
    document.getElementById("anime-title").style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function hideAnime() {
    document.getElementById("anime-title").style.backgroundColor = "black";
}

window.onload = init;