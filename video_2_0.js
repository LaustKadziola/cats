

//INIT
var videoPath = "../resources/videos/";
var v = document.getElementsByTagName('video')[0];

var video = "SQUISH";
//Settin gup the video
var source = document.createElement('source');
v.appendChild(source);
source.setAttribute('src',videoPath + video + ".mp4");



//Code to run at specific times durring the video
v.addEventListener(
    'timeupdate',
    function (event) {
        if(v.currentTime > v.duration * 0.10){
            console.log("times up");
        }
    },
    false
);


function playVideo(){
    v.play();
}
