$(document).ready(function(){
  const hamburgerMenu = document.querySelector('.hamburger');
  const menuCloseItem = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  hamburgerMenu.addEventListener('click', () => {
  menu.classList.add('active');

  });
  menuCloseItem.addEventListener('click', () => {
      menu.classList.remove('active');
      });
  menu.addEventListener('click', () => {
      menu.classList.remove('active');
      });
      
  (function(){
    const counters = document.querySelectorAll('.skills__raitings-counter'), 
    lines = document.querySelectorAll('.skills__raitings-line span');

      counters.forEach((item, i) => {
      lines[i].style.width = item.innerHTML;

      });


  }());

  $('.modal__close').on('click', function() {
      $('.overlay, #thanks').fadeOut('slow');
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

    // Відправка повідомлення з даними в телеграм канал через бота.--->>>>
    const TOKEN = "6409988498:AAFQJa2GYe5YoQ6N_J3afM81jKyqc1plJAw";
    const CHAT_ID = "-1001970201977";
    const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    $('form').submit(function(e){
      e.preventDefault();
        if(!$(this).valid()){
            return;
        }
        let message = `<b> Заявка з сайту!</b>\n`;
        message += `<b>Відправник:</b> ${this.name.value}\n`;
        message += `<b>Пошта:</b> ${this.email.value}\n`;
        message += `<b>Повідомлення:</b> <i>${this.message.value}</i>\n`;
        axios.post(URL_API, {
          chat_id: CHAT_ID,
          parse_mode: 'html',
          text: message
        })
        .then(function(){
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

// paralax 
window.addEventListener('scroll', e => {
document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})

// smoothScroll
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
wrapper: '.paralax-wrapper',
content: '.paralax-content',
smooth: 1.8
});

gsap.registerPlugin(ScrollToPlugin);

function getSamePageAnchor (link) {
if (
  link.protocol !== window.location.protocol ||
  link.host !== window.location.host ||
  link.pathname !== window.location.pathname ||
  link.search !== window.location.search
) {
  return false;
}

return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
const elem = hash ? document.querySelector(hash) : false;
if(elem) {
  if(e) e.preventDefault();
  gsap.to(window, {scrollTo: elem});
}
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
a.addEventListener('click', e => {
  scrollToHash(getSamePageAnchor(a), e);
});
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

  //scroll up
  ($)(window).scroll(function(){
    if($(this).scrollTop() > 1600){
        $('.pageup').fadeIn('slow');
    } else {
        $('.pageup').fadeOut('slow');
    }
  });