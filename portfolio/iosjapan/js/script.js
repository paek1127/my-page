$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });
  //헤더 스크롤 반응 끝
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top_btn").stop().fadeIn();
    } else {
      $(".top_btn").stop().fadeOut();
    }
  });
  $(".top_btn").click(function () {
    $("html, body").stop().animate({ scrollTop: 0 });
  });
  //탑버튼 끝
  $(".gnb>li")
    .eq(1)
    .mouseenter(function () {
      $(this).find(".sub").stop().slideDown(300);
    });
  $(".gnb>li").mouseleave(function () {
    $(this).find(".sub").stop().slideUp(300);
  });
  $(".gnb>li .sub li").mouseenter(function () {
    $(this).find(".sub_sub").stop().slideDown(300);
  });
  $(".gnb li .sub li").mouseleave(function () {
    $(this).find(".sub_sub").stop().slideUp(300);
  });
  //서브메뉴 끝
  $(".slide").slick({
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnDotsHover: true,
  });
  //메인슬라이드 끝
  $(".t_tab>li>a").click(function (e) {
    e.preventDefault();
    $(".t_tab>li").removeClass("active");
    $(this).parent("li").addClass("active");
  });
  //테마 탭메뉴 끝
  $(".c_box>li>a").click(function (e) {
    e.preventDefault();
    $(".c_box>li").removeClass("active");
    $(this).parent("li").addClass("active");
  });
  //질문 텝메뉴 끝
  // $(".e_box span").click(function(){
  //   $("#modal").fadeIn();
  // });
  // $("#modal .x_btn").click(function(){
  //   $("#modal").fadeOut();
  // });
  //익스 모달창 끝
  $(".prev").fadeOut(1000);
  $(".next").fadeOut(1000);
  $(".slide_btn").mouseenter(function () {
    $(".prev").stop().fadeIn(500);
    $(".next").stop().fadeIn(500);
  });
  $(".slide_btn").mouseleave(function () {
    $(".prev").stop().fadeOut(500);
    $(".next").stop().fadeOut(500);
  });
  //메인슬라이드 화살표 끝
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".phone img").stop().fadeIn();
    } else {
      $(".phone img").stop().fadeOut();
      $(".phone .number").stop().fadeOut();
    }
  });
  $(".phone img").click(function () {
    $(".phone .number").stop().toggle();
  });
  //전화번호 모달창 끝
  $(".r_group li").on("click", function (e) {
    e.preventDefault();
    let r = $(this).index();
    $(".r_sub").fadeIn();
    $(".r_sub li").eq(r).fadeIn();
  });
  $(".r_sub").on("click", function (e) {
    e.preventDefault();
    $(".r_sub").fadeOut();
    $(".r_sub li").fadeOut();
  });
  //추천상품 모달끝
  $(window).scroll(function () {
    let amount = $(this).scrollTop();
    if (amount > 1800) {
      $(".r_group>li")
        .eq(0)
        .stop()
        .animate({ top: "0px", opacity: "1" }, 100, function () {
          $(".r_group>li")
            .eq(1)
            .stop()
            .animate({ top: "0px", opacity: "1" }, 100, function () {
              $(".r_group>li")
                .eq(2)
                .stop()
                .animate(
                  { top: "0px", opacity: "1" },
                  100,
                  function () {
                    $(".r_group>li")
                      .eq(3)
                      .stop()
                      .animate({ top: "0px", opacity: "1" }, 100);
                  }
                );
            });
        });
    } else {
      $(".r_group>li")
        .eq(0)
        .stop()
        .animate({ top: "-200px", opacity: "0" }, 1, "linear", function () {
          $(".r_group>li")
            .eq(1)
            .stop()
            .animate({ top: "-200px", opacity: "0" }, 1, "linear", function () {
              $(".r_group>li")
                .eq(2)
                .stop()
                .animate(
                  { top: "-200px", opacity: "0" },
                  1,
                  "linear",
                  function () {
                    $(".r_group>li")
                      .eq(3)
                      .stop()
                      .animate({ top: "-200px", opacity: "0" }, 1, "linear");
                  }
                );
            });
        });
    }
  });
//추천끝
  $(".phone img").mouseenter(function(){
    $(".phone .p_click").stop().fadeIn();
  });
  $(".phone img").mouseleave(function(){
    $(".phone .p_click").stop().fadeOut();
  });
});
