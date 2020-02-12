$(document).ready(function(){
	
	jQuery(".main-menu a.bar").click(function(){
		jQuery(".main-menu ul").slideToggle();
	});
	
	jQuery(window).resize(function(){
		var screenwidth=jQuery(window).width();
		if(screenwidth >768){
			jQuery(".main-menu ul").show();
		}else{
			jQuery(".main-menu ul").hide();
		}
	});

$('.slider-part .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//bottom slider

$('.bottom-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
	autoplay:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
})