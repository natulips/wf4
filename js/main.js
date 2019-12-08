$(document).ready(function() {
	

    $('.photos-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });
	/* scroll */
	
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

 now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".timer").attr("data-timer", perem);
    $(".timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.5,
        "fg_width": 0.022,
        "circle_bg_color": "#fc7f39",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#000",
                "show": false
            },
            "Hours": {
                "text": "ore",
                "color": "#ffffff",
                "show": true
            },
            "Minutes": {
                "text": "minuti",
                "color": "#ffffff",
                "show": true
            },
            "Seconds": {
                "text": "secondi",
                "color": "#ffffff",
                "show": true
            }
        }
    });

});
