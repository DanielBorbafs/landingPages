const AbrirMenu = () => document.body.classList.toggle("open");

function removerClasse() {
    document.body.classList.remove("open")
}

var botaoRemover = document.getElementById("remove");

botaoRemover.addEventListener("click", removerClasse)