var membros = document.getElementById("membros");
var texto = document.getElementById("texto");

function grupo() {
    texto.style.opacity = 0;
    membros.style.opacity = 100;
}

function fechar() {
    texto.style.opacity = 100;
    membros.style.opacity = 0;
}
