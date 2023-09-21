

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


function fadeInLeft(element){
element.style.setProperty("animation", "fadeInLeft 2s");
}