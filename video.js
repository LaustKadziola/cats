

//INIT
var videoPath = "resources/videos/";
var v = document.getElementsByTagName('video')[0];
var buttons = document.getElementById('buttons'); // The div contaning the buttons
// A list of all the opiton buttion including the ones not visible
var buttonList = document.getElementById('buttons').querySelectorAll("button"); 

// initializing current node as the first node
var currentNode = getNode(start);

//Settin gup the video
var source = document.createElement('source');
v.appendChild(source);
source.setAttribute('src',videoPath + currentNode.video + ".mp4");



//Code to run at specific times durring the video
v.addEventListener(
    'timeupdate',
    function (event) {
        if(v.currentTime > v.duration * 0.10){
            console.log("times up");
            buttons.style.display = "block";
        }
    },
    false
);

buttonList.forEach(button => {
    button.addEventListener("click", function(){onOptionClick(button)});
});


changeButtons();
function changeButtons(){
    

    for (let i = 0; i < buttonList.length; i++) {

        if(i<currentNode.options.length){
            buttonList[i].innerText = currentNode.options[i].text;
            buttonList[i].dataset.link = currentNode.options[i].link;
            buttonList[i].style.display = "block";
        }else{
            buttonList[i].style.display = "none";
        } 

    }
}

function onOptionClick(myButton){
    console.log(myButton.dataset.link);
    currentNode = getNode(window[myButton.dataset.link]);
    console.log("new current node");
    console.log(currentNode);

    var videoUrl = videoPath + currentNode.video + ".mp4";
    buttons.style.display = "none";
    console.log("Changing Video");
    source.setAttribute('src',videoUrl);
    v.load();
    v.play();

    
    changeButtons();

}


function playVideo(){
    v.play();
}
