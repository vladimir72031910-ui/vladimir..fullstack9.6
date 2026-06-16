
  const swiper = new Swiper('.price-sector', {
   direction: 'horizontal',
    slidesPerView: 'auto',
   loop: true,
   pagination: {
     el:'.swiper-pagination',
    clickable: true,
  },
    breakpoints: {
     770: {
    enabled: false,
    }
    }

  });