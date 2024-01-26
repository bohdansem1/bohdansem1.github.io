"use strict";

let burger = document.querySelector('.burger-menu');

// burger.addEventListener('click', () =>{
//    console.log('1'); /* працює */
// });

burger.onclick = () => {
   // console.log('1');/*  працює */
  document.documentElement.classList.toggle('burger-open');
};
