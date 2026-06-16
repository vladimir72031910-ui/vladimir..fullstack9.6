 const swiper = new Swiper('.swiper-section',{
    direction: 'horizontal',
     slidesPerView: 'auto',
   loop: true,
   pagination: {
     el:'.swiper-pro',
    clickable: true,
  },
    breakpoints: {
     770: {
    enabled: false,
    }
     }

   });
