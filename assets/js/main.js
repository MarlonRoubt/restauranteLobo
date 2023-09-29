const navDrop = document.getElementById('navDrop');

function onLoadBlock(){
    navDrop.style.display = 'none';

   let pedidos = document.querySelectorAll('.pedidos');
   let logo = document.querySelector('.logo');

   pedidos.forEach(pedido => {
    fadeInLeft(pedido);
   })

   fadeInLeft(logo);
   mudouTamanho();

}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        navDrop.style.display = "block";
    } else {
        navDrop.style.display = "none";
    }
}

function clickMenu() {
    if (navDrop.style.display == 'block') {
        navDrop.style.display = 'none'; 
    } else {
        navDrop.style.display = 'block';
    }
}

mudouTamanho();
window.addEventListener('resize', mudouTamanho);


function fadeInLeft(element){
element.style.setProperty("animation", "fadeInLeft 2s");
}



