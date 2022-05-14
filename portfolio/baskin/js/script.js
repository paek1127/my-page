$(document).ready(function () {
  let i = $(".main_visual .indicator li.on").index();
  let count = $(".main_visual .main li").length;
  let wid = $(".main_visual").width();
  $("nav .gnb").mouseenter(function () {
    $(this).find(".sub").stop().slideDown(300);
    $("header").stop().animate({ height: "350px" }, 300);
  });
  $("nav .gnb").mouseleave(function () {
    $(this).find(".sub").stop().slideUp(300);
    $("header").stop().animate({ height: "150px" }, 300);
  });

  $(".main_visual .indicator li").click(function () {
    i = $(this).index();
    autoMain();
  });
  var auto = setInterval(function () {
    if (i == count - 1) {
      i = 0;
    } else {
      i++;
    }
    autoMain();
  }, 5000);
  $("img[alt=left]").click(function () {
    if (i == 0) {
      i = count - 1;
    } else {
      i--;
    }
    autoMain();
  });
  $("img[alt=right]").click(function () {
    if (i == count - 1) {
      i = 0;
    } else {
      i++;
    }
    autoMain();
  });
  $(".main_visual").mouseenter(function () {
    clearInterval(auto);
  });
  $(".main_visual").mouseleave(function () {
    auto = setInterval(function () {
      if (i == count - 1) {
        i = 0;
      } else {
        i++;
      }
      autoMain();
    }, 5000);
  });

  function autoMain() {
    $(".main_visual .indicator li").removeClass("on");
    $(".main_visual .indicator li").eq(i).addClass("on");
    $(".main_visual .main").animate({ "margin-left": -wid * i }, 1000);
  }

  $(".event .indicator li").click(function () {
    e = $(this).index();
    $(".event .indicator li").removeClass("on");
    $(".event .indicator li").eq(e).addClass("on");
    $(".event1 ul").stop().fadeOut();
    $(".event1 ul").eq(e).stop().fadeIn();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top_btn").stop().fadeIn();
    } else {
      $(".top_btn").stop().fadeOut();
    }
  });
  $(".top_btn").click(function () {
    $("html, body").stop().animate({ scrollTop: "0" });
  });

  $(".best .con_btn img[alt=right_btn]").on("click", function () {
    i = $(".best_congroup_txt div.active").index();
    if (i == 9) {
      i = 0;
    } else {
      i++;
    }
    $(".best_congroup_txt div").stop().fadeOut().removeClass("active");
    $(".best_congroup_txt div").eq(i).stop().fadeIn().addClass("active");
    $(".best_congroup").animate({ "margin-left": "-350px" }, 300, function () {
      $(".best_congroup div").first().appendTo(".best_congroup");
      $(".best_congroup").css({ "margin-left": "0px" });
    });
  });
  $(".best .con_btn img[alt=left_btn]").on("click", function () {
    i = $(".best_congroup_txt div.active").index();
    if (i == 0) {
      i = 9;
    } else {
      i--;
    }
    $(".best_congroup_txt div").stop().fadeOut().removeClass("active");
    $(".best_congroup_txt div").eq(i).stop().fadeIn().addClass("active");
    $(".best_congroup").animate({ "margin-left": "350px" }, 300, function () {
      $(".best_congroup div").last().prependTo(".best_congroup");
      $(".best_congroup").css({ "margin-left": "0px" });
    });
  });

  $(".menu .menu_btn img[alt=right_btn]").on("click", function () {
    i = $(".menu_slide div.active").index();
    if (i == 4) {
      i = 0;
    } else {
      i++;
    }
    $(".menu_slide div").stop().fadeOut().removeClass("active");
    $(".menu_slide div").eq(i).stop().fadeIn().addClass("active");
    $(".menu_sub_group>li").stop().fadeOut().removeClass("active");
    $(".menu_sub_group>li").eq(i).stop().fadeIn().addClass("active");
  });
  $(".menu .menu_btn img[alt=left_btn]").on("click", function () {
    i = $(".menu_slide div.active").index();
    if (i == 0) {
      i = 4;
    } else {
      i--;
    }
    $(".menu_slide div").fadeOut().removeClass("active");
    $(".menu_slide div").eq(i).fadeIn().addClass("active");
    $(".menu_sub_group>li").stop().fadeOut().removeClass("active");
    $(".menu_sub_group>li").eq(i).stop().fadeIn().addClass("active");
  });
});
