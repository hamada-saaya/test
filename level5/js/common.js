$(function(){
/* ハンバーガーメニュー */
  $("#open").on("click",function(){
    $("body").addClass("active");
  });

  $("#close").on("click",function(){
    $("body").removeClass("active");
  });

  $("#mask").on("click",function(){
    $("body").removeClass("active");
  });


// アニメーション1
  setTimeout(function(){
    $('.hTitle p').addClass('popUp')
  },0);
  setTimeout(function(){
    $('.htLine').addClass('popUp')
  },500);
  setTimeout(function(){
    $('.hText').addClass('popUp')
  },800);

// アニメーション2
  $(".intro .Title p").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("fade");
      }
    },0);
  });

  $(".intro .tLine").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("role");
      }
    },500);
  });

  $(".intro .Text").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("fade");
      }
    },800);
  });



/* アニメーション3・4 ・8*/
  $(".iText p").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("blabla");
    }
  });

/* アニメーション5*/
  $(".clients .Title p").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("fade");
      }
    },0)
  });
  $(".clientsImage ul li:nth-child(1)").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
         $(div).stop().addClass("slide");
      }
    },500)
  });
  $(".clientsImage ul li:nth-child(2)").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
         $(div).stop().addClass("slide");
      }
    },600)
  });
  $(".clientsImage ul li:nth-child(3)").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
         $(div).stop().addClass("slide");
      }
    },700)
  });
  $(".clientsImage ul li:nth-child(4)").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
         $(div).stop().addClass("slide");
      }
    },800)
  });
  $(".clientsImage ul li:nth-child(5)").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
         $(div).stop().addClass("slide");
      }
    },900)
  });


/* アニメーション6*/
  $(".about .Title p").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("pikapika");
      }
    },0)
  });
  $(".about .Text").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("pikapika");
      }
    },500)
  });

/* アニメーション7*/
  $(".why .Title p").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("buruburu");
      }
    },0)
  });
  $(".why .tLine").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("buruburu");
      }
    },300)
  });
  $(".why .Text").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("buruburu");
      }
    },800)
  });

/* アニメーション9*/
  $(".touch .Title p").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("slowfade");
      }
    },0)
  });
  $(".touch .tLine").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("slowfade");
      }
    },300)
  });
  $(".touch .Text").on("inview", function (event, isInView) {
    var div = $(this);
    setTimeout(function(){
      if (isInView) {
        $(div).stop().addClass("slowfade");
      }
    },600)
  });

/* アニメーション10*/
  $(".formLeft").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("fadeInL");
    }
  });
  $(".formRight").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("fadeInR");
    }
  });

  // slick カルーセル
  $("#slider").slick({
    dots:true,
    slidesToShow:3,
    responsive:[
      {
      breakpoint:376,
      settings:{
        slidesToShow:1,
      }
    }]
  });

});


