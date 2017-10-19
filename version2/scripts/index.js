var prefixes = ["-webkit-","-moz-","-ms-","-o-",""];

$(document).ready(function () {

/*  function marqueeAnimation(content, animate) {
    var ow = content.parent().outerWidth(); // Container width
    var w = content.outerWidth(); // Content width
    var t = ow+w; // Travel (container + width of content)
    var pps = 90; // Pixels per second
    var s = t/pps; // Seconds
    
    var keyframeRules = "";
    for (var i = 0; i < prefixes.length; i++) {
        keyframeRules += '@' + prefixes[i] + 'keyframes ' + animate + ' {\n' +
            '    0% { left: ' + ow + 'px; }\n' +
            '    100% { left: -' + w + 'px; }\n' +
            '}\n';
    };
        
    keyframeRules += ' .'+animate+' { \n';
    for(p in prefixes){
        keyframeRules += '    '+prefixes[p]+'animation: '+animate+' '+s+'s linear infinite; \n';
    }
    keyframeRules += "}";
    $('head').append($('<style/>').html(keyframeRules));
    content.addClass(animate);
  }*/

  function marqueeAnimation(content, animate) {
    var ow = content.parent().outerWidth(); // Container width
    var w = content.outerWidth(); // Content width
    var t = ow+w; // Travel (container + width of content)
    var pps = 100; // Pixels per second
    var s = t/pps; // Seconds
      
    var keyframeRules = "";
    for (var i = 0; i < prefixes.length; i++) {
        keyframeRules += '@' + prefixes[i] + 'keyframes ' + animate + ' {\n' +
            '    0% {' + prefixes[i] + 'transform: translateX(' + ow + 'px); }\n' +
            '    100% {' + prefixes[i] + 'transform: translateX(-' + w + 'px); }\n' +
            '}\n';
    };
        
    keyframeRules += ' .'+animate+' { \n';
    for(p in prefixes){
        keyframeRules += '    '+prefixes[p]+'animation: '+animate+' '+s+'s linear infinite; \n';
    }
    keyframeRules += "}";
    $('head').append($('<style/>').html(keyframeRules));
    content.addClass(animate);
  }

  $(window).bind('orientationchange', function() {
    $('.settings #gear, .config').sidr();

    if($(window).width() <= 862)
    {
      $(".header-channel").css("display","none");
    }
    else
    {
      $(".header-channel").css("display","block");
    }

    if($(window).width() > $(window).height())
    {
      $(".modal").css("position","absolute");
      $(".sidebar-buttons").css("background","#0074B0");
      $(".sidebar-item").fadeOut(10);
      $(".sidebar-title").html("#DIRECTVInteractivo");
      $(".item-interactivo").delay(100).fadeIn("fast");
      $(".sidebar-buttons[data-filter='.item-interactivo']").css("background", "#023d5f");
      $(".change-buttons").css("background", "#0074B0");
      $(".change-buttons:first-child").css("background", "#023d5f");
      $(".main-panel .content-wrapper:not(.juego)").css("display","none");
    }
    else
    {
      $(".modal").css("position","fixed");
    }

    $('.feed:visible #destacado').removeClass("marquee_one");
    $('.feed:visible #dataCurioso').removeClass("marquee_two");
    marqueeAnimation($('.feed:visible #destacado'), "marquee_one");
    marqueeAnimation($('.feed:visible #dataCurioso'), "marquee_two");

  });


  $(".sidebar-buttons").css("background","#0074B0");
  $(".sidebar-buttons[data-filter='.item-interactivo']").css("background", "#023d5f");
  $(".sidebar-item").fadeOut(10);
  $('.item-interactivo').delay(100).fadeIn("fast");

  $(".sidebar-buttons").on("click", function() {

    var filter = $(this).attr('data-filter');

    $(".sidebar-item").fadeOut(10);
    $(".sidebar-title").html($(this).html());
    $(filter).delay(100).fadeIn("fast");
    $(".sidebar-buttons").css("background","#0074B0");
    $(this).css("background","#023d5f");
  });

  $(".loading-content").css("margin-top", $(window).height()/2 - 125);

  var mSwiper = $('.swiper-container').swiper({
    pagination: '.pagination',
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });

  var tSwiper = $('.swiper-container2').swiper({
    pagination: '.pagination2',
    loop:true,
    grabCursor: true,
    paginationClickable: true
  });

  $(window).on("load", function() {
    $('.settings #gear, .config').sidr();

    $(".loading").delay(750).fadeOut(750);

    if($(window).width() <= 862)
    {
      $(".header-channel").css("display","none");
    }
    else
    {
      $(".header-channel").css("display","block");
    }

    if($(window).width() <= 520)
    {
      $(".header-rank").css("display","none");
    }
    else
    {
      $(".header-rank").css("display","block");
    }

    $('.feed #destacado').removeClass("marquee_one");
    $('.feed #dataCurioso').removeClass("marquee_two");
    marqueeAnimation($('.feed #destacado'), "marquee_one");
    marqueeAnimation($('.feed #dataCurioso'), "marquee_two");
    $('.feed #destacado.2').removeClass("marquee_three");
    $('.feed #dataCurioso.2').removeClass("marquee_four");
    marqueeAnimation($('.feed #destacado.2'), "marquee_three");
    marqueeAnimation($('.feed #dataCurioso.2'), "marquee_four");
  });

  $(window).on("resize", function() {
    $('.settings #gear, .config').sidr();

    if($(window).width() <= 862)
    {
      $(".header-channel").css("display","none");
    }
    else
    {
      $(".header-channel").css("display","block");
    }

    if($(window).width() <= 520)
    {
      $(".header-rank").css("display","none");
    }
    else
    {
      $(".header-rank").css("display","block");
    }


    $('.feed #destacado').removeClass("marquee_one");
    $('.feed #dataCurioso').removeClass("marquee_two");
    marqueeAnimation($('.feed #destacado'), "marquee_one");
    marqueeAnimation($('.feed #dataCurioso'), "marquee_two");
    $('.feed #destacado.2').removeClass("marquee_three");
    $('.feed #dataCurioso.2').removeClass("marquee_four");
    marqueeAnimation($('.feed #destacado.2'), "marquee_three");
    marqueeAnimation($('.feed #dataCurioso.2'), "marquee_four");
  });

  $(".m-main .menu-item, .t-main .button").on("click", function() {
    $(".modal-content").fadeOut(10);
    var filter = $(this).attr('data-filter');
    $(".modal-title").html($(this).html());
    $(filter).fadeIn(10);
    $(".modal").delay(20).fadeIn("fast");
  });

  $(".modal-close").on("click touchstart", function() {
    $(".modal").fadeOut("fast");
  });

  $(".settings #gear").on("click touchstart", function() {

    $(this).addClass("spin");

    if ($(this).hasClass("spinActive"))
    {
      $(".spin").css("-webkit-animation", "gearSpinBack .75s 1");
      $(".spin").css("-moz-animation", "gearSpinBack .75s 1");
      $(".spin").css("-o-animation", "gearSpinBack .75s 1");
      $(".spin").css("-ms-animation", "gearSpinBack .75s 1");
      $(".spin").css("animation", "gearSpinBack .75s 1");
    }
    else
    {
      $(".spin").css("-webkit-animation", "gearSpin .75s 1");
      $(".spin").css("-moz-animation", "gearSpin .75s 1");
      $(".spin").css("-o-animation", "gearSpin .75s 1");
      $(".spin").css("-ms-animation", "gearSpin .75s 1");
      $(".spin").css("animation", "gearSpin .75s 1");
    }

    $(this).toggleClass("spinActive");
  });

  $("#close2").on("click touchstart", function() {
    $.sidr('close', 'sidr');
  });

  $(".change-buttons").css("background", "#0074B0");
  $(".change-buttons:first-child").css("background", "#023d5f");
  $(".main-panel .content-wrapper:not(.juego)").css("display","none");

  $(".change-buttons").on("click", function() {
    $(".main-panel .content-wrapper").fadeOut(10);
    var filter2 = $(this).attr("data-filter");
    $(filter2).delay(100).fadeIn("fast");
    $(".change-buttons").css("background", "#0074B0");
    $(this).css("background", "#023d5f");
  });

});