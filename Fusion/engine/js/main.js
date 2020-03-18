$(document).ready(function(){
	$('.slider-main').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:3000,
		autoplaySpeed:1500,
		// waitForAnimate : false
	});

	$('.slider-recall').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:3000,
		autoplaySpeed:1500,
		// waitForAnimate : false
		variableWidth: true
	});

});


personHoverEffcet = document.querySelectorAll('.peson-infomation');

	personHoverEffcet.forEach(function (item){
		item.addEventListener('mouseover', function() {
			let logo = this.querySelector('.logo');
			let name = this.querySelector('.name');
			let decr = this.querySelector('.decription');
			let img = this.querySelector('img');

			logo.style.position = 'absolute';
			logo.style.width = '50px';
			logo.style.height = '50px';
			logo.style.top = '10px';
			logo.style.left = '10px';


			img.style.height = '50px';
			img.style.width = '50px';

			name.style.position = 'absolute';
			name.style.top = '135px';
			name.style.left = '-35px';
			name.style.transform = 'rotate(90deg)'
		

			decr.style.display = 'block';
		});
	});

	// position: absolute;
    // width: 70px;
    // height: 70px;

	personHoverEffcet.forEach(function (item){
		item.addEventListener('mouseout', function() {
			let decr = this.querySelector('.decription');
			let logo = this.querySelector('.logo');
			let name = this.querySelector('.name');
			let img = this.querySelector('img');

			name.style.position = '';
			name.style.transform = 'rotate(0deg)'

			img.style.height = '120px';
			img.style.width = '120px';

			logo.style.position = '';
			logo.style.width = '120px';
			logo.style.height = '120px';	
			name.style.transform = 'rotate(0deg)'

			decr.style.display = 'none';
		});
	});

