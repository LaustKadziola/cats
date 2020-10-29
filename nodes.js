
//==========Starting Node==========//
var start = {
    video: "bath",
    options: [
        {
            text: "big eyed cat",
            link: "striking"
        },
        {
            text: "Squish! the cat",
            link: "squishCat"
        }
    ]

};

//=========Second layer==========//

var striking = {
    video: "Striking",
    options: [
        {
            text: "Squish! the cat",
            link: "squishCat"
        }
    ]

};

var squishCat = {
    video: "SQUISH",
    options: [
        {
            text: "big eyed cat",
            link: "striking"
        },
        {
            text: "this cat is bathing",
            link: "start"
        }
    ]

};

//==========Get function==========//
function getNode(node){
    return node;
}