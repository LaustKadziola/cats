console.log("hello there!")

var v = document.getElementsByTagName('video')[0];
var source = document.createElement('source');
v.appendChild(source);

var buttons = document.getElementById('buttons');
source.setAttribute('src','resources/videos/Striking.mp4');

v.addEventListener(
    'timeupdate',
    function (event) {
        console.log(v.currentTime);
        if(v.currentTime > v.duration * 0.10){
            console.log("times up");
            buttons.style.display = "block";
        }
    },
    false
);

var buttonNames = ["bath", "SQUISH", "Striking"];
var videoPath = "resources/videos/"

var buttonList = document.getElementById('buttons').querySelectorAll("button");

changeButtons();

function changeButtons(){
    
    for (let i = 0; i < buttonList.length; i++) {
        if(i<buttonNames.length){
            buttonList[i].innerText = buttonNames[i]
            buttonList[i].addEventListener("click", function(){changeVideo("resources/videos/" + buttonNames[i] + ".mp4")});
        }else{
            buttonList[i].style.display = "none";
        } 

    }
}


function changeVideo(src){
    buttons.style.display = "none";
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