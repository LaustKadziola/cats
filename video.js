console.log("hello there!")

var v = document.getElementsByTagName('video')[0];
var source = document.createElement('source');
v.appendChild(source);


source.setAttribute('src','Striking.mp4');

v.addEventListener(
    'timeupdate',
    function (event) {
        console.log(v.currentTime);
        if(v.currentTime > 1){

        }
    },
    false
);


var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');
var button3 = document.getElementById('button_3');
button1.addEventListener("click", function(){changeVideo('bath.mp4')});
button2.addEventListener("click", function(){changeVideo('SQUISH.mp4')});
button3.addEventListener("click", function(){changeVideo('Striking.mp4')});


function changeVideo(src){
    console.log("Changing Video");
    source.setAttribute('src',src);
    v.load();
    v.play();
}


function playVideo(){
    v.play();
}

class Node {
    constructor(title, video, options) {
        this.title = title;
        this.video = video;
        this.options = options;
    }
}