// ANIMAÇÃO DE ROLAGEM
AOS.init();

// MENU FIXO COM SCROLL
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu-nav-ul a');
    
    links.forEach(link => {
        link.addEventListener('click', function(infosDoEvento) {
            infosDoEvento.preventDefault();
            const id = this.getAttribute('href').substring(1);
            const elemento = document.getElementById(id);
            const alturaCabecalho = document.getElementById('cabecalho').offsetHeight;
            const posicao = elemento.offsetTop;
            const posicaoOffset = posicao - alturaCabecalho;

            window.scrollTo({
                top: posicaoOffset,
                behavior: 'smooth'
            });
        });
    });
});

// EFEITO DE DIGITAÇÃO DE TEXTO
new Typed('#titulo-digitado', {
    strings: ["Bem-vindos, nós somos a Blue GR"],
    typeSpeed: 50,
    loop: false
});