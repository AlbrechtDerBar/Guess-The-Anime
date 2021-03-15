// function init() {
    
// }
var test = 'M7lc1UVf-VE';
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: test
    });
}

function play() {
    player.playVideo();
}

function skip() {
    player.loadVideoById("bHQqvYy5KYo", 5, "large")
}

// window.onload = init;