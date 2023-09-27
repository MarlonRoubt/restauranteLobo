

function onLoadBlock(){
    navDrop.style.display = 'none';

   let pedidos = document.querySelectorAll('.pedidos');
   let logo = document.querySelector('.logo');

   pedidos.forEach(pedido => {
    fadeInLeft(pedido);
   })

   fadeInLeft(logo);

}


function clickMenu() {
    if (navDrop.style.display == 'block') {
        navDrop.style.display = 'none'; 
    } else {
        navDrop.style.display = 'block';
    }
}

// para o nav acima de 768px

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        navDrop.style.display = "block";
    } else {
        navDrop.style.display = "none";
    }
}


function fadeInLeft(element){
element.style.setProperty("animation", "fadeInLeft 2s");
}

function scrollToSection(sectionClass) {
    const section = document.querySelector(sectionClass);

    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}


document.querySelector('#scrollUpButton').addEventListener('click', function() {
    // Rola para cima para a seção '.sobre'
    scrollToSection('.sobre');
    scrollToSection('.nossaCasa');
    scrollToSection('.reservas');

});

document.querySelector('#scrollDownButton').addEventListener('click', function() {
    // Rola para baixo para a seção '.nossaCasa'
    scrollToSection('.nossaCasa');
    scrollToSection('.reservas');
    scrollToSection('.formulario');
});
