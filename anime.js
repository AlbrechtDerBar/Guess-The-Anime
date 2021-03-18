// variables for random song/start time
var rnd = 0;
var rndPrev = 0;
var startTime = 0;

let videos = ["vS_a8Edde8k", "-WpnPSChVRQ", "Jrg9KxGNeJY"];
let titles = ["Anime 1", "DMC5", "Devil May Cry 5"];
let songTitles = ["night of nights", "Devil Trigger", "Bury the Light"]

function init() {
    var prevbutton = document.getElementById("prev");
    var settingsbutton = document.getElementById("settings-button");
    var playbutton = document.getElementById("play-pause");
    var replaybutton = document.getElementById("replay");
    var nextbutton = document.getElementById("next");

    prevbutton.addEventListener("click", prev);
    settingsbutton.addEventListener("click", settings);
    playbutton.addEventListener("click", playPause);
    replaybutton.addEventListener("click", replay);
    nextbutton.addEventListener("click", next);
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


// random function for video
function rndVideo() {
    return Math.floor(Math.random() * (videos.length));
}
//random function for start time
function rndTime() {
    return (15 + Math.floor(Math.random() * 15));
}


// functions for the music controls
function next() {
    rnd = rndVideo();
    // startTime = rndStart();
    rndStart();

    document.getElementById("anime-title").innerHTML = titles[rnd]
    if (document.getElementById("includeSongName").checked) {
        document.getElementById("song-title").innerHTML = songTitles[rnd]
    }
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
    else {
        return startTime = 0;
    }
}

function playTime() {

}

function songTitle() {
    var includesongTitleFull = document.getElementById("includeSongNameFull");
    var songTitle = document.getElementById("song-title");

    if (includesongTitleFull.hasAttribute("disabled")) {
        includesongTitleFull.disabled = false;
    }
    else {
        includesongTitleFull.disabled = true;
        includesongTitleFull.checked = false;
    }
    songTitle.innerHTML = songTitles[rnd]
}

function songTitleFull() {
    document.getElementById("song-title").style.backgroundColor = "rgba(0, 0, 0, 0)";
}


// show anime button
function showAnime() {
    document.getElementById("anime-title").style.backgroundColor = "rgba(0, 0, 0, 0)";
    document.getElementById("song-title").style.backgroundColor = "rgba(0, 0, 0, 0)";
}

function hideAnime() {
    if (document.getElementById("includeSongNameFull").checked) {
        document.getElementById("anime-title").style.backgroundColor = "black";
    }
    else {
        document.getElementById("anime-title").style.backgroundColor = "black";
        document.getElementById("song-title").style.backgroundColor = "black";
    }
}

window.onload = init;