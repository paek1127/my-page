$(document).ready(function(){
  $(".navi>li").hover(function(){
    $(this).children(".sub").stop().slideToggle(300)
  });
});