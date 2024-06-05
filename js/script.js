// alert("Bem vindos");
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