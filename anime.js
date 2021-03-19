// variables for random song/start time
var rnd = 0;
var rndPrev = 0;
var startTime = 0;
var endTime = 0;

let videos = ["vS_a8Edde8k", "-WpnPSChVRQ", "Jrg9KxGNeJY"];
let titles = ["Anime 1", "DMC5", "Devil May Cry 5"];
let songTitles = ["night of nights", "Devil Trigger", "Bury the Light"]

function init() {
    var prevbutton = document.getElementById("prev");
    var settingsbutton = document.getElementById("settings-button");
    var playbutton = document.getElementById("play-pause");
    var replaybutton = document.getElementById("replay");
    var nextbutton = document.getElementById("next");
    var show = document.getElementById("show");
    var showSongAlways = document.getElementById("includeSongNameFull");
    var songName = document.getElementById("includeSongName");
    var random = document.getElementById("random");
    var playtime = document.getElementById("time");

    prevbutton.addEventListener("click", prev);
    settingsbutton.addEventListener("click", settings);
    playbutton.addEventListener("click", playPause);
    replaybutton.addEventListener("click", replay);
    replaybutton.addEventListener("click", playPause);
    nextbutton.addEventListener("click", next);
    show.addEventListener("click", showAnime);
    showSongAlways.addEventListener("change", songTitleFull);
    songName.addEventListener("change", songTitle);
    random.addEventListener("change", next);
    playtime.addEventListener("change", next);
}

var player;

function onYouTubeIframeAPIReady() {
    rnd = rndVideo()
    rndPrev = rnd;
    rndStart();

    player = new YT.Player('player', {
        height: '0',
        width: '0',
        videoId: videos[rnd],
        playerVars: {
            'start': startTime,
            'endSeconds': endTime
        }
    });

    document.getElementById("anime-title").innerHTML = titles[rnd]

    player.addEventListener("onStateChange", ended)
    player.addEventListener("onStateChange", state)
}


// random function for video
function rndVideo() {
    return Math.floor(Math.random() * (videos.length));
}
//random function for start time
function rndTime() {
    return (60 + Math.floor(Math.random() * 15));
}


// functions for the music controls
function next() {
    rnd = rndVideo();
    rndStart();
    playTime();

    document.getElementById("anime-title").innerHTML = titles[rnd]
    if (document.getElementById("includeSongName").checked) {
        document.getElementById("song-title").innerHTML = songTitles[rnd]
    }
    if (player.getPlayerState() == 1) {
        player.loadVideoById({'videoId': videos[rnd],
        'startSeconds': startTime,
        'endSeconds': endTime});
    }
    else if (player.getPlayerState() == 2 || player.getPlayerState() == -1 || player.getPlayerState() == 5  || player.getPlayerState() == 0) {
        player.cueVideoById({'videoId': videos[rnd],
        'startSeconds': startTime,
        'endSeconds': endTime});
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
    player.cueVideoById({'videoId': videos[rnd],
    'startSeconds': startTime,
    'endSeconds': endTime});
}

function playPause() {
    if (player.getPlayerState() == 2 || player.getPlayerState() == -1 || player.getPlayerState() == 5  || player.getPlayerState() == 0) {
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

function ended() {
    if (player.getPlayerState() == 0) {
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
    switch(document.getElementById("time").selectedIndex) {
        case 0:
            endTime = player.getDuration();
        break;
        case 1:
            endTime = startTime + 10;
        break;
        case 2:
            endTime = startTime + 5;
        break;
        case 3:
            endTime = startTime + 1;
        break;
        default:
            endTime = player.getDuration();
    }
}

function songTitle() {
    var includesongTitleFull = document.getElementById("includeSongNameFull");
    var songTitle = document.getElementById("song-title");

    if (includesongTitleFull.hasAttribute("disabled")) {
        includesongTitleFull.disabled = false;
        songTitle.innerHTML = songTitles[rnd];
    }
    else {
        includesongTitleFull.disabled = true;
        includesongTitleFull.checked = false;
        songTitle.innerHTML = "";
    }
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

// debug
function state() {
    switch(player.getPlayerState()) {
        case 0:
            console.log("ended");
        break;
        case 1:
            console.log("playing");
        break;
        case 2:
            console.log("paused");
        break;
        case 3:
            console.log("buffering");
        break;
        case 5:
            console.log("video cued");
        break;
        case -1:
            console.log("unstarted");
        break;
            
    }
}

window.onload = init;