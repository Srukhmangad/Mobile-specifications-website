var circle = document.getElementById("circle");
var Upbtn = document.getElementById("Upbtn");
var Downbtn = document.getElementById("Downbtn");
var rotatevalue = circle.style.transform;
var rotatesum;

Upbtn.onclick=function (){
    rotatesum= rotatevalue + "rotate(-90deg)";
    circle.style.transform=rotatesum;
    rotatevalue = rotatesum;
}

Downbtn.onclick=function (){
    rotatesum= rotatevalue + "rotate(90deg)";
    circle.style.transform=rotatesum;
    rotatevalue = rotatesum;
}