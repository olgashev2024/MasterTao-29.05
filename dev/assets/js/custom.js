  const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('.mobile-container');
 

  function showBurgerMenu() {
    mobileContainer.classList.toggle('show');
    burger.classList.toggle('is-active');
  }

  burger.addEventListener('click', showBurgerMenu)


  const swiper = new Swiper('.swiper-info', {
    loop:true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 5000,
    },
  });