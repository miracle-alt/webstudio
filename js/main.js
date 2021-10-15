/* TABS */
$('.card').on('click', function() {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})
/* HAMBURGER */
$('.hamburger').on('click', function () {
    $('.head__menu').toggle();
})
$('.menu-close').on('click', function(){
    $('.head__menu').hide();
})
/* PARALLAX */
let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);
/* SLIDER */
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    stopOnLastSlide: false,
    autoplay: {
    delay: 2000
    }
});
/* Когда листаеш в право - бесконечно, когда листаеш в лево - видно что с обновлением */
/* MAP */
ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7,
        controls: ['zoomControl','geolocationControl'],
    });
}
/* VALIDATOR */
$.validator.addMethod('regex', function(value, element, regexp) {
        let regExsp = new RegExp(regexp);
        return regExsp.test(value);
    },'Please check your input.'
);
$('form').validate({
    rules: {
        firstName: {
            required: true,
            regex : '[A-Za-z]{1,32}'   
        },
        phoneNumber: {
            digits : true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: '[0-9]+'
        }
    },
    messages: {
        firstName: 'Write name',
        phoneNumber: 'Write telephone'
    }
});











