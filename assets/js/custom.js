{
   var swiper = new Swiper(".feedbackSwiper", {
     freeMode: true,
     loop: true,
     breakpoints: {
       // when window width is >= 320px
       320: {
       slidesPerView: 1,
       spaceBetween: 40,
       centeredSlides: true,
       },
       // when window width is >= 992px
       768: {
       slidesPerView: 2,
       spaceBetween: 40,
       },
       1200: {
       slidesPerView: 3,
       spaceBetween: 40
       }
     }
   });
 }
 