// MOSTRAR E ESCONDER O FORMULÁRIO
var btnForm = document.getElementById("botao-form");
var form = document.getElementById("form-comentario");
btnForm.addEventListener('click', (infosDoEvento) => {
    infosDoEvento.preventDefault();

    if (form.style.display != 'block') {
        form.style.display = 'block';
        return;
    }
    form.style.display = 'none';
});

// PUBLICAR COMENTÁRIO NO CARROSEL
var arrayComentarios = [
    {
        nome: "",
        comentario: ""
    }
];
const nomeUsuario = document.getElementById("nome");
const comentarioUsuario = document.getElementById("comentario");
const btnEnvioForm = document.querySelector(".botao-enviar");
btnEnvioForm.addEventListener('click', function(infosDoEvento) {
    infosDoEvento.preventDefault();
    criarComentario();
});
function criarComentario() {
    if (localStorage.Arr){             
        arrayComentarios = JSON.parse(localStorage.getItem('Arr')); 
    }

    let novoComentario = {
        nome: nomeUsuario.value,
        comentario: comentarioUsuario.value
    }
    arrayComentarios.unshift(novoComentario);
    nomeUsuario.value = "";
    comentarioUsuario.value = "";
    localStorage.Arr = JSON.stringify(arrayComentarios);
    mostraComentariosNaTela();
}
window.onload = mostraComentariosNaTela();
function mostraComentariosNaTela() {
    let listaComentarios = document.querySelector("#carrosel-comentarios");
    listaComentarios.innerHTML = "";

    if (localStorage.Arr){             
        arrayComentarios = JSON.parse(localStorage.getItem('Arr')); 
    }
    arrayComentarios.forEach(
        comentario => {
            let comentarioNovo = document.createElement('li');
            comentarioNovo.innerHTML = `
                <h2><img src="../images/icones/user-solid.svg" alt="icone de user"> - ${comentario.nome}</h2>
                <br>
                <p>${comentario.comentario}</p>
                <br>
                <button onclick="apagarComentario(${arrayComentarios.indexOf(comentario)})"> Apagar </button>
            `;
            listaComentarios.append(comentarioNovo);
        }
    )
}
function apagarComentario(id){
    arrayComentarios.splice(id, 1);
    localStorage.Arr = JSON.stringify(arrayComentarios);  
    mostraComentariosNaTela();
}