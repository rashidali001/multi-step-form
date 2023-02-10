let sidebar_image = document.querySelector('#sidebar');
sidebar_image.src = './assets/images/bg-sidebar-mobile.svg';

if (window.innerWidth > 800){
    sidebar_image.src = './assets/images/bg-sidebar-desktop.svg';
}

/* Check when screen resizes */
const body = document.querySelector('body');
body.onresize = () => {
    if (window.innerWidth > 800){
        sidebar_image.src = './assets/images/bg-sidebar-desktop.svg';
    } else {
        sidebar_image.src = './assets/images/bg-sidebar-mobile.svg';
    }
}