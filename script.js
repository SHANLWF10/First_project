let Btn = document.getElementById("btn");

let popUp = document.querySelector("#hidden");

let para = document.querySelector(".para");

let text = document.getElementById('text');

let post = document.querySelector("btn-review");

let Btn2 = document.getElementById('btn2');
let body = document.getElementsByTagName('body');

Btn.addEventListener("click", function pop(){
    if(popUp.style.display == "none"){
        popUp.style.display = "block";
        popUp.style.transitionDuration = "500ms";
        Btn.textContent = "DOWN";

    }else{
        popUp.style.display = "none";
        popUp.style.transitionDuration = "500ms";
        Btn.textContent = "UP";
    }
});
let suu = text.textContent;
function review(){
    para.textContent = suu;
    text.textContent = null;
};
Btn2.addEventListener("click", function() {
  body.style.backgroundColor = "blue";  
});
