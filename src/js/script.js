$(document).ready(function(){
    const hamburgerMenu = document.querySelector('.hamburger');// Кнока меню в правій верхній частині екрану
    const menuCloseItem = document.querySelector('.menu__close');//Хрестик для закривання меню в правій верхній частині екрану
    const menu = document.querySelector('.menu');// 
    hamburgerMenu.addEventListener('click', () => {
    menu.classList.add('active');
  
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('active');
        });
    menu.addEventListener('click', () => {
        menu.classList.remove('active');
        });


  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 75;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("animate__fadeIn");
      } else {
        reveals[i].classList.remove("animate__fadeIn");
      }
    }
  }
  window.addEventListener("scroll", reveal);
  
        
  (function(){
    const counters = document.querySelectorAll('.skills__raitings-counter'), 
    lines = document.querySelectorAll('.skills__raitings-line span');
  
      counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;
  
      });
  
  
  }());

  // $('.button_submit').on('click', function() {
  //   $('.overlay, #thanks').fadeIn('slow');
    
  // });
  $('.modal__close').on('click', function() {
      $('.overlay, #thanks').fadeOut('slow');
  });
  // $('.catalog-item__btn').each(function(i){
  //     $(this).on('click', function() {
  //         $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
  //         $('.overlay, #order').fadeIn('slow');
  //     });
  // });
    
        
        
  //scroll up
  ($)(window).scroll(function(){
    if($(this).scrollTop() > 1600){
        $('.pageup').fadeIn('slow');
    } else {
        $('.pageup').fadeOut('slow');
    }
  });
  
        // scrool
        
  ($)(document).ready(function(){
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
  });
  
        
        
        
  (function () {
  $('.contacts-form').validate({
      rules:{
        name: 'required',
        email: {
            required: true,
            email: true
        }
      },
      messages: {
          name: "Будь ласка введіть ваше ім'я",
          email: {
            required: "Будь ласка введіть вашу поштy",
            email: "Наприклад name@domain.com"
          }
      }
  
  });
  
  $('form').submit(function(e){
    e.preventDefault();
      if(!$(this).valid()){
          return;
      }
      $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
      }).done(function(){
          $(this).find("input").val("");
          $('#thanks, .overlay').fadeIn();
          $('form').trigger('reset');
      });
    return false;
  });
  
  
  }()); 



  function determineTimeOfDay() {
    const hour = new Date().getHours();
    let timeOfDay;
  
    if (hour >= 0 && hour < 18) {
      timeOfDay = 'дня';
    } else if (hour >= 18 && hour < 24) {
      timeOfDay = 'вечора';
    }
    return timeOfDay;
  }
  const DayOrEvening = determineTimeOfDay();
  const timeOfDayElement = document.getElementById('timeOfDay');
  timeOfDayElement.textContent = `Постараюсь відповісти вам найближчим часом, гарного ${DayOrEvening}!`

}); 


