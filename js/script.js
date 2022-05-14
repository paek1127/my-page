$(document).ready(function(){
  history.scrollRestoration = "manual"
  //새로고침시 스크롤 최상단고정
  $("html").css({"overflow":"hidden"});
  //로딩 스크롤없앰
  setTimeout(function(){
    $("#loading").fadeOut();
    $("html").css({"overflow":"auto"});
  },2500);
  //로딩화면 끝

  $("nav").css({"margin-left":"2000px"});
  $("nav").delay(3500).animate({"margin-left":"0px"},800);
  //nav딜레이 애니메이션 끝
  
  let pos1 = $("#intro").offset().top;
  let pos2 = $("#about").offset().top;
  let pos3 = $("#skills").offset().top;
  let pos4 = $("#portfolio").offset().top;

  $(".gnb li").on("click",function(e){
    e.preventDefault();
    let room = $(this).children("a").attr("href");
    let distance = $(room).offset().top;
    $("html,body").stop().animate({"scrollTop":distance});
  });
  //nav 클릭 스크롤이동 끝

  $(window).scroll(function(){
    if($(this).scrollTop() > pos3&& $(this).scrollTop() < pos4){
      $("header nav").css({"border-color":"rgba(236, 236, 236, 0.432)"});
      $("header nav .logo").css({"border-color":"rgb(236, 236, 236)"});
      $("header nav .logo a").css({"color":"rgb(236, 236, 236)"});
      $("header nav .gnb li a").css({"color":"rgb(236, 236, 236)"});
    }else if($(this).scrollTop() > pos2){
      $("header nav").css({"border-color":"rgba(0, 0, 0, 0.432)"});
      $("header nav .logo").css({"border-color":"#000000"});
      $("header nav .logo a").css({"color":"#000000"});
      $("header nav .gnb li a").css({"color":"#000000"});
    }else{
      $("header nav").css({"border-color":"rgba(236, 236, 236, 0.432)"});
      $("header nav .logo").css({"border-color":"rgb(236, 236, 236)"});
      $("header nav .logo a").css({"color":"rgb(236, 236, 236)"});
      $("header nav .gnb li a").css({"color":"rgb(236, 236, 236)"});
    }
  });
  //nav 스크롤 색변경 끝

  var text = document.getElementById("typeStyle");
  var typewriter = new Typewriter(text, {
    loop: true
  });
  typewriter.pauseFor(4200).typeString('WELCOME TO MY PORTFOLIO.').pauseFor(2000).deleteAll().typeString('웹퍼블리셔 백성현입니다.').pauseFor(2000).start();
  //intro 끝

  $(window).scroll(function(){
    if($(this).scrollTop() > pos2 + 300){
      $(".skill li").stop().fadeIn();
      $('.per1').easyPieChart({
        barColor: '#ff3300',
        trackColor: 'transparent',
        scaleColor: 'transparent',
        lineCap: 'round',
        lineWidth: 20,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      });
      $('.per2').easyPieChart({
        barColor: '#0080ff',
        trackColor: 'transparent',
        scaleColor: 'transparent',
        lineCap: 'round',
        lineWidth: 20,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      });
      $('.per3').easyPieChart({
        barColor: '#ffd700',
        trackColor: 'transparent',
        scaleColor: 'transparent',
        lineCap: 'round',
        lineWidth: 20,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      });
      $('.per4').easyPieChart({
        barColor: '#008d62',
        trackColor: 'transparent',
        scaleColor: 'transparent',
        lineCap: 'round',
        lineWidth: 20,
        size: 200,
        animate: 1000,
        onStart: $.noop,
        onStop: $.noop
      });
    }else{
      $(".skill li").stop().fadeOut();
    }
  });
  //skill 차트

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top_btn").stop().fadeIn();
    } else {
      $(".top_btn").stop().fadeOut();
    }
  });
  //top버튼 스크롤 페이드인아웃 끝

  $(".top_btn").on("click",function(){
    $("html, body").stop().animate({ scrollTop: 0 });
  });
  //top버튼 클릭 끝
  
});