$(".carousel").carousel({
    interval : 4000
});

$(".search a").click(function(){

    $(".popup1").fadeIn(500);
});

$(".popup1 span").click(function(){

    $(".popup1").fadeOut(500);

})

var swiper = new Swiper('.s1', {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.s', {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var swiper = new Swiper('.s2', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  $(".gear-check i").on("click" , function(){
  
    $(this).toggleClass("fa-spin");  
    $(".option-box").toggleClass("hideoption");
  });

  /**************** color theam ************************** */

  var elColor = $(".color-option ul li");
  elColor
  .eq(0).css("backgroundColor" , " rgb(221, 90, 2)").end()
  .eq(1).css("backgroundColor" , " #E426D5").end()
  .eq(2).css("backgroundColor" , " #009AFF").end()
  .eq(3).css("backgroundColor" , "#f7074f");


  elColor.click(function()
  {
    $("link[href*='theam']").attr("href" , $(this).attr("data-value"));

  });


  $(window).on("load" , function(){
    
    $(".load").fadeOut();
  });

  var scroll_top  = $(".top");
  
$(window).scroll(function(){

  if($(this).scrollTop() >= 700)
  {
    scroll_top.fadeIn(600);
  }
  else
  {
    scroll_top.fadeOut(600);

  }
});

scroll_top.on("click" , function(){
  $("html , body").animate({
    scrollTop : 0
  }, 600);
});

new WOW().init();

$(function() {
	$("html").niceScroll({
       cursorcolor: " rgb(252, 88, 13)" ,//Change the scroll bar color
       cursoropacitymin: 1,
       cursorwidth: "8px", 
       cursorborder: "1px solid #000",
     });
});


