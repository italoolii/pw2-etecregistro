// javascript

function parar() {
    document.getElementById("parar").style.backgroundColor = "red";
    document.getElementById("atencao").style.backgroundColor = "gray";
    document.getElementById("seguir").style.backgroundColor = "gray";
}

function atencao() {
    document.getElementById("parar").style.backgroundColor = "gray";
    document.getElementById("atencao").style.backgroundColor = "yellow";
    document.getElementById("seguir").style.backgroundColor = "gray";
}

function seguir() {
    document.getElementById("parar").style.backgroundColor = "gray";
    document.getElementById("atencao").style.backgroundColor = "gray";
    document.getElementById("seguir").style.backgroundColor = "green";
}