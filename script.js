const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

function aba_1(){
  document.getElementsByTagName("p").classList.remove("active")
  document.getElementById("text-1").classList.add("active")
  document.getElementById("aba-1").classList.add("active")
}

function aba_2(){
  document.getElementsByTagName("p").classList.remove("active")
  document.getElementById("text-2").classList.add("active")
  document.getElementById("aba-2").classList.add("active")
}