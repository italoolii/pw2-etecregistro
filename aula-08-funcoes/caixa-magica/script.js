// JAVA SCRIPT
//capturando elemento
const caixaMagica = document.getElementById("caixaMagica");

//"escutando" os eventos realizados com o elemento da DOM 
caixaMagica.addEventListener("mouseenter", entradaMouse);

caixaMagica.addEventListener("mouseout", saidaMouse);

caixaMagica.addEventListener("click", clickMouse);

//criando uma função 
function entradaMouse() {
    caixaMagica.innerText = "Olá, Diego! ;)";
    caixaMagica.style.backgroundColor = "blue";

}

function saidaMouse() {
    caixaMagica.innerText = "Adeus, Diego! :(";
    caixaMagica.style.backgroundColor = "red";
}

function clickMouse() {
    caixaMagica.innerText = "Você clicou em mim! :D";
    caixaMagica.style.backgroundColor = "green";
}