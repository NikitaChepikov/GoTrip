//Carusel

const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 1,

    responsive: {

        540: {
            items:3
        },

        1200 : {
            margin: 20,
            items: 3
        }
    }
});

// Go to the previous item
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
});
// Go to the next item
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
});


//Menu Icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.body.classList.toggle('no-scroll');
    nav.classList.toggle('nav--mobile');
    menuIcon.classList.toggle('menu-icon-active');
}