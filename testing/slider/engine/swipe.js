function Swipe() {
    this.initialPoint = null;
    this.finalPoint = null;
    this.targetObj = null;
    this.selectObj = null;

    this.init = function (swipe) {
        this.targetObj = swipe.targetObj;
        this.justDo = swipe.justDo;
    }

    this.addSwipe = function () {
        this.selectObj = document.querySelector('#' + this.targetObj);

        // add start touch
        this.selectObj.addEventListener('touchstart', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.initialPoint = event.changedTouches[0];
        }, false);

        // // add end touch ane event
        this.selectObj.addEventListener('touchend', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.finalPoint = event.changedTouches[0];

            let xAbs = Math.abs(this.initialPoint.pageX - this.finalPoint.pageX);
            let yAbs = Math.abs(this.initialPoint.pageY - this.finalPoint.pageY);
            if (xAbs > 20 || yAbs > 20) {
                if (xAbs > yAbs) {
                    if (this.finalPoint.pageX < this.initialPoint.pageX) {
                        
                    } else {
                        // right swipe
                    }
                } else {
                    if (this.finalPoint.pageY < this.initialPoint.pageY) {
                        // left top
                    } else {
                         // left bottom
                    }
                }
            }
        }, false);
    }

}


var swipeSlider = new Swipe();

swipeSlider.init({
    targetObj: 'first',
});

swipeSlider.addSwipe();

console.log(swipeSlider);

// var slider = document.querySelector('.slider');
// var initialPoint;
// var finalPoint;
// slider.addEventListener('touchstart', function(event) {
// event.preventDefault();
// event.stopPropagation();
// initialPoint=event.changedTouches[0];
// }, false);
// slider.addEventListener('touchend', function(event) {
// event.preventDefault();
// event.stopPropagation();
// finalPoint=event.changedTouches[0];
// var xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
// var yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
// if (xAbs > 20 || yAbs > 20) {
// if (xAbs > yAbs) {
// if (finalPoint.pageX < initialPoint.pageX){
//     console.log('sfsf')
// /*СВАЙП ВЛЕВО*/}
// else{
// /*СВАЙП ВПРАВО*/}
// }
// else {
// if (finalPoint.pageY < initialPoint.pageY){
// /*СВАЙП ВВЕРХ*/}
// else{
// /*СВАЙП ВНИЗ*/}
// }
// }
// }, false);