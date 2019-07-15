$(document).ready(function(){
    $(".pitch-carousel").owlCarousel({
        items: 1,
        loop: true,
        animateOut: "fadeOut",
        nav: true,
    });

    $(".testimonials-carousel").owlCarousel({
        items: 2,
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive : {
            0 : {
                items: 1,
            },
            500 : {
                items: 2,
            },
        },
    });
});

let nav =  document.getElementById("navbar");
let navHeight = nav.offsetHeight;
let navBg = document.querySelector(".header__container");


window.addEventListener("scroll", function () {
    if (pageYOffset > navHeight) {
        navBg.classList.add("js--header-container-bg-white");
        nav.classList.add("js--header-nav-py0");
        nav.classList.replace("navbar-dark","navbar-light");
    } else {
        navBg.classList.remove("js--header-container-bg-white");
        nav.classList.remove("js--header-nav-py0");
        nav.classList.replace("navbar-light","navbar-dark");
    }
});

