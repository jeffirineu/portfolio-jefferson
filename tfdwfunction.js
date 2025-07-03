document.addEventListener('DOMContentLoaded', function () {
    // Seleciona os links do menu e as secoes da pagina
    const linksNavegacao = document.querySelectorAll('header nav a');
    const secoes = document.querySelectorAll('main section');

    // Funcao que esconde todas as secoes
    function esconderTodasAsSecoes() {
        secoes.forEach(secao => {
            secao.classList.add('hidden');
        });
    }

    // Ao carregar a pagina, esconde tudo e mostra a primeira secao (sobre)
    esconderTodasAsSecoes();
    document.querySelector('#sobre').classList.remove('hidden');

    // Para cada link do menu, adiciona um clique
    linksNavegacao.forEach(link => {
        link.addEventListener('click', function(evento) {
            // Cancela o comportamento padrao do link
            evento.preventDefault();
            // Esconde todas as secoes novamente
            esconderTodasAsSecoes();
            // Pega o ID do destino a partir do href do link
            const idAlvo = link.getAttribute('href');
            // Mostra a secao correspondente
            document.querySelector(idAlvo).classList.remove('hidden');
        });
    });

});
