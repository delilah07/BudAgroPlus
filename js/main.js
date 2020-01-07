$(function () {
    
    //Products Slick Slider
    
    $('.products-slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        responsive: [
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });

    
    
    //Clients Slick Slider
    
    $('.clients__gallery-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    
     $('.reviews__gallery-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    $('.services-slide__items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    
    $('.work-item__slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
        adaptiveHeight: true,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    
    $('.product-item__bg-slider-inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.product-item__slider-inner'
    });
    $('.product-item__slider-inner').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-item__bg-slider-inner',
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false,
        adaptiveHeight: true,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    
    $('.awards__gallery-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        responsive:[
        
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            customPaging: function (slider, i) {
            return (i + 1) + '/' + slider.slideCount;
            },
          }
        }
      ]
    });
    
    //Accordion
    
    $(".products__accordion-header").on("click", function() {
        if ($(this).hasClass("active")){
           $(this).removeClass("active");
              $(".products__accordion-body").slideUp();  
        } else{
              $(".products__accordion-header").removeClass("active");
              $(this).addClass("active");
              $(".products__accordion-body").slideUp();
              $(this)
                .siblings(".products__accordion-body")
                .slideDown();
        }
    
  });
    
   
    $(".services-page__accordion-header").on("click", function() {
    
      $(".services-page__accordion-header").removeClass("active");
      $(this).addClass("active");
      $(".services-page__accordion-body").slideUp();
      $(this)
        .siblings(".services-page__accordion-body")
        .slideDown();
  });
    
    $(".product-item__accordion-header").on("click", function() {
      $(".product-item__accordion-header").removeClass("active");
      $(this).addClass("active");
        
      if($(window).width() < 767){
          $(".product-item__accordion-body").slideUp();
          $(this)
            .siblings(".product-item__accordion-body")
            .slideDown();
      } else{

          $(".product-item__accordion-body").removeClass("active");
          $(this)
            .siblings(".product-item__accordion-body")
            .addClass("active");
      }
  });
    
    /*Menu Nav Toggle*/
	$(".header__toggle").on("click",function(event){

		$(this).toggleClass("active");
		$(".header__nav").toggleClass("active");
	});

	// Hiding burger menu 
    $(".header__nav-link").on("click", function(event){

        $(".header__toggle").removeClass("active");
        $(".header__nav").removeClass("active");

    });
    
    
    //btn
    $(".services-page__btn").on("click",function(event){

		$(this).toggleClass("active");
		$(".services-page__nav").toggleClass("active");
	});

	// Hiding burger menu 
    $(".services-page__accordion-link").on("click", function(event){

        $(".services-page__btn").removeClass("active");
        $(".services-page__nav").removeClass("active");

    });
    
});

