window.addEventListener("load", ()=>{

const loader = document.getElementById("loader");

loader.style.display="none";

});

const text = "Hello I am Mumtoza";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}

}

typing();
