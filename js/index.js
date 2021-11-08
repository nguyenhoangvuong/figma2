const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

const prev = document.querySelector('.swiper-button-next')
const next = document.querySelector('.swiper-button-prev')

prev.addEventListener('click',()=>{
  next.style.opacity = 0.4;
  prev.style.opacity = 1;
})
next.addEventListener('click',()=>{
  prev.style.opacity = 0.4;
  next.style.opacity = 1;
})



const nav = document.querySelector('.header-list')
const bar = document.querySelector('.header-bar')
const closebtn = document.querySelector('.header-close')

bar.addEventListener('click',()=>{
  nav.classList.add('is-show')
})
closebtn.addEventListener('click',()=>{
  nav.classList.remove('is-show')
})