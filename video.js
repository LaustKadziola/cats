console.log("hello there!")

var v = document.getElementsByTagName('video')[0];
var source = document.createElement('source');
v.appendChild(source);


source.setAttribute('src','resources/videos/Striking.mp4');

v.addEventListener(
    'timeupdate',
    function (event) {
        console.log(v.currentTime);
        if(v.currentTime > v.duration * 0.80){
            console.log("times up");
        }
    },
    false
);


var button1 = document.getElementById('button_1');
var button2 = document.getElementById('button_2');
var button3 = document.getElementById('button_3');
button1.addEventListener("click", function(){changeVideo('resources/videos/bath.mp4')});
button2.addEventListener("click", function(){changeVideo('resources/videos/SQUISH.mp4')});
button3.addEventListener("click", function(){changeVideo('resources/videos/Striking.mp4')});


function changeVideo(src){
    console.log("Changing Video");
    source.setAttribute('src',src);
    v.load();
    v.play();
}


function playVideo(){
    v.play();
}

class Choice {
    constructor(title, video, options) {
        this.title = title;
        this.video = video;
        this.options = options;
    }

    GenerateOptions(){
        options.forEach(option => {
            
        });
    }
}