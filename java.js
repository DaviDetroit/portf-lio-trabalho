function mostrarHome() {
    mostrarSeção("home");
}

function mostrarSobreMim() {
    mostrarSeção("sobre-mim");
}

function mostrarTrabalhos() {
    mostrarSeção("trabalhos");
}

function mostrarContato() {
    mostrarSeção("contato");
}

function mostrarMensagem() {
    alert("Obrigado por acessar a seção de contato! Em breve entrarei em contato com você.");
}

// Função genérica para alternar as seções
function mostrarSeção(seção) {
    // Remove qualquer conteúdo oculto
    document.body.className = ""; // Remover qualquer classe extra no body
    document.getElementById("conteudo-principal").classList.add("oculto");

    // Adiciona ou remove a classe "oculto" para cada seção
    const seções = ["sobre-mim", "trabalhos", "contato"];
    
    seções.forEach(secao => {
        if (secao === seção) {
            document.querySelector(`.${secao}`).classList.remove("oculto");
        } else {
            document.querySelector(`.${secao}`).classList.add("oculto");
        }
    });
}





  



