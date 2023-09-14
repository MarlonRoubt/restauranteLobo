

function onLoadBlock(){
    navBarLeft.style.display = 'block'
    clickMenu();
}

function clickMenu() {
    if (navBarLeft.style.display == 'block') {
        navBarLeft.style.display = 'none'   
    } else {
        navBarLeft.style.display = 'block'
    }
}





