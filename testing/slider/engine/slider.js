function Slider() {
    this.sliderIndeficator = null;
    this.selectSlider = null;
    this.controls = null;
    this.slideIndex = null;
    this.slideItems = null;

    this.init = function(slider) {
        if (!slider) {
            console.log('false');
            return false;
        } else {
            this.sliderIndeficator = slider.sliderIndeficator;
            this.slideIndex = slider.slideIndex || 0;

            this.selectSlider = document.querySelector('#' + this.sliderIndeficator + ' .slider');
            this.controls = document.querySelectorAll('#' + this.sliderIndeficator + ' .control-slider .conrol-slider-item');
            this.slideItems = document.querySelectorAll('#' + this.sliderIndeficator + ' .item');

            this.swipeSlide();
        }
    }

    this.showSlide = function(n) {
        this.slideItems[n-1].classList.add('active');
        this.slideItems[this.slideIndex].classList.remove('active');

        this.controls[n-1].classList.add('conrol-slider-item_active');
        this.controls                                                                                                                                                                   [this.slideIndex].classList.remove('conrol-slider-item_active');
        this.slideIndex = n-1;
    }

    this.swipeSlide = function() {
        
    }
}


var firstSlider = new Slider();

firstSlider.init({
    sliderIndeficator : 'first',
    slideIndex : 1
});

// console.log(firstSlider);

var secondSlider = new Slider();

secondSlider.init({
    sliderIndeficator : 'second',
});

// console.log(secondSlider);


