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
            `;
            listaComentarios.append(comentarioNovo);
        }
    )
}
function apagarFilme(id){
    arrayComentarios.splice(id, 1);
    localStorage.Arr = JSON.stringify(arrayComentarios);  
    mostraComentariosNaTela();
}

// VALIDAÇÃO DO FORMULÁRIO DE CONTATO
document.getElementById('form-contato').addEventListener('submit', function(infosDoEvento) {
    infosDoEvento.preventDefault();
    const nome = document.querySelector("#nome").value.trim();    
    const email = document.querySelector("#email").value.trim();    
    const telefone = document.querySelector("#telefone").value.trim();
    const mensagem = document.querySelector("#mensagem").value.trim();
    let validacao = true;
    let mensagemErro = [];
    if(!nome || !email || !telefone || !mensagem) {
        mensagemErro.push("Todos os campos devem ser preenchidos.");
        validacao = false;
    }
    if(nome.length < 3) {
        mensagemErro.push("O nome deve ter pelo menos 3 letras.");
        validacao = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)) {
        mensagemErro.push("Por favor, insira um email inválido.");
        validacao = false;
    }
    const telefoneRegex = /^[0-9]{10,}$/;
    if (!telefoneRegex.test(telefone)) {
        mensagemErro.push("Por favor, insira um telefone válido com pelo menos 10 digítos.")
        validacao = false;
    }
    if (!validacao) {
        alert(mensagemErro.join("\n"));
    } else {
        alert("Formulário enviado com sucesso!");
        document.querySelector("#nome").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#telefone").value = "";
        document.querySelector("#mensagem").value = "";
    }
});
