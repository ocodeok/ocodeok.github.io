$(function(){
    $('.fairy-tail__slider, .our-trip__slider').slick({
        slideToShow: 1,
        slideToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev slick-btn"><img src="./images/arrow-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"><img src="./images/arrow-right.svg" alt="arrow"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                arrows: false
            }
        }]
    });
    
});

