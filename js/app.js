

$(document).ready(function() {

      if ( $("#buscar").length ) {
    $("#buscar").autocomplete({
      minLength: 3,
      source : "/search/ajax_suggest.php",
    }).data("uiAutocomplete")._renderItem = function(ul, item) {
      return $("<li />")
      .data("item.autocomplete", item)
      .append("<a href='"+item.uri+"'><img class='autocomplete_image' src='"+item.icon+"' /><p class='title_autocomplete'>"+item.label+"<p></a>")
      .appendTo(ul);
    };
  }

   // MENU RESPONSIVE
    var accion ="dentro";
    $(".hamburguer-icon-um").click(function(){
       if (accion == "dentro"){
        $(".nav-container").addClass('active');
        accion = "fuera";
       }
       else{
        $(".nav-container").removeClass('active');
        accion = "dentro";
       }
    });

 $('.slide-product-full div').removeClass('container_div');

    // carousel topbar
        $('.slide-product-full > div').slick({
          infinite: true,
          arrows: false,
          slidesToShow:1,
          slidesToScroll: 1,
          autoplay: true,
          lazyLoad: 'ondemand',
          dots: false,
          speed: 5000,
          slidesToShow: 1,
          swipeToSlide:true,
          focusOnSelect: true
        });

        setTimeout(function() {

     $('.product-carousel').slick('unslick');
     $(".product-carousel").slick({
              infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 4,
              arrows: true,
                        nextArrow: '<i class="fa fa-chevron-right text-white slick-next"></i>',
                        prevArrow: '<i class="fa fa-chevron-left text-white slick-prev"></i>',
              dots: false,
              responsive: [
      {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        slidesToShow: 1
      }
    }
  ]
            
            });

   

  },1000);



	$('#carrousel_3').slick({
      infinite: true,
      arrows: true,
      nextArrow: '<i class="fas fa-chevron-right slick-next"></i>',
      prevArrow: '<i class="fas fa-chevron-left slick-prev"></i>',
      slidesToShow:8,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      lazyLoad: 'ondemand',
      dots: false,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 6 
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          }
        ]
  });

	console.log("imprimiendo");

	// Ocultar por defecto resumen de carrito
		$('.car-view-um').css("display", "none");
		$("#canasta_compras").hover(function(){
		    $(".car-view-um").fadeIn(400);
		});

		$("#canasta_compras").mouseleave(function(){
		    $(".car-view-um").fadeOut(400);
		});


	//Indicador de ciudades popup funcionts

	$location = $('#ciudades_ip :selected').text();

    $('#location').text($location);


      $('#location').on('click',function(){

      	 $('#container-popup').fadeToggle().css('display','flex');

      });

      $('.container-popup').on('click',function() {

      	  $(this).fadeOut();

      });

    var img = $('<img width="100">'); //Equivalent: $(document.createElement('img'))
    img.attr('src', 'https://cdn.totalcode.com.co/universomascotas/web_content/assets/Promociones-universomascotas.webp');
	$('.indicador_ciudad').prepend(img);

    $('.indicador_ciudad').wrap("<div class='container-popup'></div>").fadeIn(500);

    // hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
				$('.scroll-navigation').addClass('fixed-top-nav').fadeIn();
			} else {	
				$('#back-top').fadeOut();
				$('.scroll-navigation').removeClass('fixed-top-nav');
			}
		});
		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


	//Categorias interaccion
 
        $('.dropdown').hover(function() {

        	$(this).find('.mega-menu').fadeIn('fast');
        },function() {
        	$(this).find('.mega-menu').fadeOut('fast');
        });

        const mq = window.matchMedia( "(min-width: 1000px)" );
        const mv = window.matchMedia( "(max-width: 600px)" );

         

        $('.content_cat_main .has-children > a').click(function(event){

            event.preventDefault();

            var target = $(this).parent();

            target.toggleClass('active');
            
            target.children('ul').slideToggle();
        });

        if(mv.matches){

        $('.vertical-menu-um .has-children > a').click(function(event) {
             event.preventDefault();
            var target = $(this).parent();
            target.toggleClass('active');
            target.children('ul').slideToggle();
        });
    }



	$(window).on("load",function(e){
	$('.formsearchcontainer .searchformum .input_buscar').focus();
});
$(window).on("load resize",function(e){
  if ($(window).width() <= 640){

         // MENU RESPONSIVE
        var accion ="dentro";
        $(".filter-mobile-categories").click(function(){
           if (accion == "dentro"){
            $(".filter-mobile-subcategories").css("display","block");
            accion = "fuera";
           }else{
            $(".filter-mobile-subcategories").css("display","none");
            accion = "dentro";
           }
        })
   
    // MENU RESPONSIVE FIN
    //CAR MOBILE
    $(".um-car-icon").appendTo( "#car-info-mobile-um" );
    $(".um-car-icon").on('click', function(){
         window.location = "https://www.universomascotas.co/checkout/viewcart.phtml";    
    });
    //CAR MOBILE FIN
  }
});


	


	// carousel topbar
	$('.topbarslide').slick({
		infinite: true,
		arrows: true,
		nextArrow: '<i class="fas fa-chevron-right text-white slick-next"></i>',
		prevArrow: '<i class="fas fa-chevron-left text-white slick-prev"></i>',
		slidesToShow:8,
		slidesToScroll: 1,
		autoplay: true,
		lazyLoad: 'ondemand',
		dots: false,
		speed: 5000,
		slidesToShow: 1,
		swipeToSlide:true,
		focusOnSelect: true,
		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow: 1 
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        arrows: false,
		        centerMode: true,
		        centerPadding: '40px',
		        slidesToShow:1
		      }
		    }
		  ]
	});

 



});