

function onLoadBlock(){
    navDrop.style.display = 'none';

   let pedidos = document.querySelectorAll('.pedidos');
   let logo = docuument.querySelector('.logo');

   pedidos.forEach(pedido => {
    fadeInLeft(pedido);
   })

}


function clickMenu() {
    if (navDrop.style.display == 'block') {
        navDrop.style.display = 'none'; 
    } else {
        navDrop.style.display = 'block';
    }
}


function fadeInLeft(element){
element.style.setProperty("animation", "fadeInLeft")
element.style.setProperty("animation-duration", "2s")
}