$(document).ready(function(){
  $(".gnb").mouseenter(function(){
    $(this).find(".sub").stop().slideDown();
    $("#header").stop().animate({"height":"330px"});
  });
  $(".gnb").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
    $("#header").stop().animate({"height":"80px"});
  })
  // $(".gnb>li").hover(function(){
  //   $(this).children("ul").stop().slideToggle(300);
  // });
  // $(".gnb>li").mouseenter(function(){
  //   $(this).children("ul").stop().slideDown(300);
  // });
  // $(".gnb>li").mouseleave(function(){
  //   $(this).children("ul").stop().slideUp(300);
  // });

  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $("#top_btn").fadeIn();
    }else{
      $("#top_btn").fadeOut();
    }
  });
  $("#top_btn").click(function(){
    $("html, body").animate({scrollTop:0});
  });
  
});