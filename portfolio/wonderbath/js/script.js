$(document).ready(function(){
  $(".video_group ul li img").click(function(){
    $(".video_group ul li").removeClass("active");
    $(this).parent().addClass("active");
  })
});