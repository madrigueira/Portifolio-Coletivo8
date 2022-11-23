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

// ABAS - BLOCO 4

$(document).ready(function() {
  $('h5').click(function() {
    $('h5.active').removeClass("active");
    $(this).addClass("active");
  });
});

$("#aba-1").click(function(){
  $("p").removeClass("active");
  $("#text-1").addClass("active");
});

$("#aba-2").click(function(){
  $("p").removeClass("active");
  $("#text-2").addClass("active");
});

$("#aba-3").click(function(){
  $("p").removeClass("active");
  $("#text-3").addClass("active");
});

$("#aba-4").click(function(){
  $("p").removeClass("active");
  $("#text-4").addClass("active");
});

$("#aba-5").click(function(){
  $("p").removeClass("active");
  $("#text-5").addClass("active");
});
