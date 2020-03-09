function Slider()  {
    this.slideIndex = 1;

    this.sliderId = null;
    this.slides = null;

    this.dots = document.getElementsByClassName("slider-dots_item");

    this.init = function(slide) {
        if (slide) {
            this.slideIndex = slide.slideIndex;
            this.sliderId = document.querySelectorAll('.' + slide.sliderId);
            this.slides = document.getElementsByClassName("item");
        }
    }
    
    this.seeSlide = function (nSlide){
        this.slides[this.slideIndex - 1].style.display = "none";
        this.dots[this.slideIndex - 1].classList.remove('active');

        this.slides[nSlide - 1].style.display = "block";
        this.dots[nSlide - 1].className += " active";

        this.slideIndex = nSlide;
    }
        
    this.nextSlide = function()  {
        if (checkСhapel()) {
            this.slideIndex += 1;
        }
    }

    this.prevSlide = function()  {
        if (checkСhapel()) {
            this.slideIndex -= 1;
        }
    }

    this.showSlides = function(indexOfSlide)  {

        for (var i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
            console.log(this.slides[i])
        }

        for (var i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }

        this.slides[this.slideIndex - 1].style.display = "block";
        this.dots[this.slideIndex - 1].className += " active";
    }

    // this.checkСhapel = function()  {
    //    if ((this.slideIndex < 1) && (this.slideIndex > this.slides.length)) {
    //        this.slideIndex = 1;
    //        return false;
    //    }

    //    return true;
    // }
};


let sliderfp = new Slider();

sliderfp.init({
    slideIndex : 1,
    sliderId   : 'slider'
});

sliderfp.showSlides();
console.log(sliderfp)
