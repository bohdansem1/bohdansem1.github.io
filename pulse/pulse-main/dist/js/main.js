
$(document).ready(function(){
    //Slider
    $('.slider__inner').slick({ 

        infinite: true,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"</button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                   
                    arrows: false,
                }
            }
        ]

    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active')
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //Modal
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
       
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.catalog-item__btn').each(function(i){
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules:{
                name: 'required',
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: "Будь ласка введіть ваше ім'я",
                phone: "Будь ласка введіть ваш номер телефону",
                email: {
                  required: "Будь ласка введіть вашу поштову адресу",
                  email: "Ваша поштова адреса має бути у форматі name@domain.com"
                }
            }
        });
    }
    validateForms('#consultation-form');
    validateForms('#order form');
    validateForms('#consultation form');

    //tel masked form
    $("input[name=phone]").mask("+38 (999) 999-9999");


    //server
    $('form').submit(function(e){
        e.preventDefault();
        // if(!$(this).valiid()){
        //     return;
        // }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('#thanks, .overlay').fadeIn();

            $('form').trigger('reset');
        });
        return false;
    });

    //scroll up
    $(window).scroll(function(){
        if($(this).scrollTop() > 1600){
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
    });

    
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
    
        // Store hash
        var hash = this.hash;
    
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
    
    new WOW().init();
});




