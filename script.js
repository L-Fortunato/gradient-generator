let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("random")


function randomColor(){
    var randomCol1 = '#'+Math.floor(Math.random()*16777215).toString(16);
    var randomCol2 = '#'+Math.floor(Math.random()*16777215).toString(16);
    color1.value = randomCol1;
    color2.value = randomCol2;
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
    return randomCol;
}

function selectColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

random.addEventListener("click", randomColor)

color1.addEventListener("input", selectColor);

color2.addEventListener("input", selectColor);