document.getElementById('sobre-mim-link').addEventListener('click', function() {
    let balao = document.getElementById('sobre-mim-balao');
    if (balao.style.display === 'none' || balao.style.display === '') {
        balao.style.display = 'block';
    } else {
        balao.style.display = 'none';
    }
});

document.getElementById('portifolio-link').addEventListener('click', () => {
    let balao = document.getElementById('portifolio-balao');
  
    if (balao.style.display === 'none' || balao.style.display === '') {
        balao.style.display = 'block';
       
    } else {
        balao.style.display = 'none';
    }
});

document.getElementById('formacao-link').addEventListener('click', () => {
    let formacao = document.getElementById('formacao-controll');
  
    if (formacao.style.display === 'none' || formacao.style.display === '') {
        formacao.style.display = 'block';
       
    } else {
        formacao.style.display = 'none';
    }
});

document.getElementById('contato-link').addEventListener('click', () => {
    let formShow = document.getElementById('form-show');
  
    if (formShow.style.display === 'none' || formShow.style.display === '') {
        formShow.style.display = 'block';
       
    } else {
        formShow.style.display = 'none';
    }
});


// Adicionando evento para fechar o balão ao clicar fora dele
document.addEventListener('click', function(event) {
    let balaoSobreMim = document.getElementById('sobre-mim-balao');
    let balaoPortifolio = document.getElementById('portifolio-balao');
    let formacaoPortifolio = document.getElementById('formacao-controll');
    let formShow = document.getElementById('form-show');
    
    if (!balaoSobreMim.contains(event.target) && event.target.id !== 'sobre-mim-link') {
        balaoSobreMim.style.display = 'none';
    }
    
    if (!balaoPortifolio.contains(event.target) && event.target.id !== 'portifolio-link') {
        balaoPortifolio.style.display = 'none';
    }

    if (!formacaoPortifolio.contains(event.target) && event.target.id !== 'formacao-link') {
        formacaoPortifolio.style.display = 'none';
    }

    if (!formShow.contains(event.target) && event.target.id !== 'contato-link') {
        formShow.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    let backButton = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 100) {
            backButton.style.opacity = "1";
        } else {
            backButton.style.opacity = "0";
        }
    });

    backButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.getElementById('inicio-link').addEventListener('click', function() {
    window.location.reload();
});
