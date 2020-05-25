var backgroundColor;
var titleColor;
function saveColorAsBackround() {
    backgroundColor = document.getElementById("colorChoice").value;
    console.log(backgroundColor);


}

function knop() {
    document.getElementById("txt").style.color= titleColor; 
    document.body.style.backgroundColor = backgroundColor;
}

function saveT() {
    titleColor = document.getElementById("colorChoice").value;
    console.log(titleColor);
}