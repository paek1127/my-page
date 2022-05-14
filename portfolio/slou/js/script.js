$(document).ready(function(){
  let i = $(".indicator li").index();
  let count = $(".main_slide li").length;

  $(".gnb li").mouseenter(function(){
    $(this).find(".sub").stop().slideDown(300);
  });
  $(".gnb li").mouseleave(function(){
    $(this).find(".sub").stop().slideUp(300);
  });

  $(".indicator li").click(function(){
    i = $(this).index();
    autoSlide();
  });
  
  $(".prev").click(function(){
    if(i == 0){
      i = count - 1;
    }else{
      i--;
    }
    autoSlide();
  });
  $(".next").click(function(){
    if(i == count - 1){
      i = 0;
    }else{
      i++;
    }
    autoSlide();
  });

  $(".main_visual").mouseenter(function(){
    $(".slide_btn li").stop().fadeIn();
    clearInterval(auto);
  });
  $(".main_visual").mouseleave(function(){
    $(".slide_btn li").stop().fadeOut();
    auto = setInterval(function(){
      if(i == count - 1){
        i = 0;
      }else{
        i++;
      }
      autoSlide();
    },5000);
  });


  var auto = setInterval(function(){
    if(i == count - 1){
      i = 0;
    }else{
      i++;
    }
    autoSlide();
  },5000);

  function autoSlide(){
    $(".indicator li").removeClass("active");
    $(".indicator li").eq(i).addClass("active");
    $(".main_slide li").stop().fadeOut();
    $(".main_slide li").eq(i).fadeIn();
  }
});