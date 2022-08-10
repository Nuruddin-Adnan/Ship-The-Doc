// codes for feedback slider
{
  var swiper = new Swiper(".feedbackSwiper", {
    freeMode: true,
    loop: true,
    // centeredSlidesBounds: false,
    breakpoints: {
      // when window width is >= 320px
      320: {
      slidesPerView: 1,
      spaceBetween: 20,
      },
      // when window width is >= 992px
      768: {
      slidesPerView: 2,
      spaceBetween: 20,
      },
      1200: {
      slidesPerView: 3,
      spaceBetween: 30
      }
    }
  });
}


// codes for items choosing cheek
{
  let option1 = document.getElementById("success-outlined");
  let option2 = document.getElementById("danger-outlined");
  let card1 = document.getElementById("item1");
  let card2 = document.getElementById("item2");

  function chooseOne() {
    if(option1.checked == true){
      card2.classList.remove("check");
      card1.classList.add("check");
    }
  }
  
  function chooseTwo() {
    if(option2.checked == true){
      card1.classList.remove("check");
      card2.classList.add("check");
    }
  }
}
 