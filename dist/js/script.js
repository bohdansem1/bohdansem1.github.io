(function () {
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
}()); 