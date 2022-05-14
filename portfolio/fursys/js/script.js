$(document).ready(function(){
  $(".gnb>li").hover(function(){
    $(this).children("ul").stop().slideToggle(300)
  });
  $(".quick").click(function(){
    $(".quick_sub").stop().toggle()
  });
  $(".tabmenu li a").click(function(e){
    e.preventDefault();
    $(".tabmenu li").removeClass("active");
    $(this).parent().addClass("active");
  });
});