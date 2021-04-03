/* Menu Bar */
var navMenu = document.getElementById("nav-menu"),
    navMenuactive = document.getElementById("nav-menu-active"),
    menuPhoto = document.getElementById("menu"),
    menuContent = document.getElementById("nav-ul-menu"),
    menuContent1 = document.getElementById("nav-li-01Ac"),
    menuContent2 = document.getElementById("nav-li-02Ac"),
    menuContent3 = document.getElementById("nav-li-03Ac"),
    menuContent4 = document.getElementById("nav-li-04Ac"),
    menuContent5 = document.getElementById("nav-li-05Ac");

    
    navMenu.onclick = function () {
        "use strict"
        navMenuactive.classList.toggle("nav-menu-activate")
        menuPhoto.classList.toggle("nav-menu-active")
        menuContent.classList.toggle("nav-display")
    }


    
     

