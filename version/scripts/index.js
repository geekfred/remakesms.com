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
    if($(window).width() > $(window).height())
    {
      $(".modal").css("position","absolute");
    }
    else
    {
      $(".modal").css("position","fixed");
    }

    $(".sidebar-buttons").css("background","#0074B0");
    $(".sidebar-item").fadeOut(10);
    $(".sidebar-title").html("#DIRECTVInteractivo");
    $(".item-interactivo").fadeIn();
    $(".sidebar-buttons[data-filter='.item-interactivo']").css("background", "#023d5f");
  });

  $(".sidebar-buttons").on("click", function() {

    var filter = $(this).attr('data-filter');

    $(".sidebar-item").fadeOut(10);
    $(".sidebar-title").html($(this).html());
    $(filter).delay(100).fadeIn("fast");
    $(".sidebar-buttons").css("background","#0074B0");
    $(this).css("background","#023d5f");
  });

  $(".loading-content").css("margin-top", $(window).height()/2 - 125);

  $(window).on("load", function() {
    $(".loading").delay(750).fadeOut(750);

    if($(window).width() <= 520)
    {
      $(".header-rank").css("display","none");
    }
    else
    {
      $(".header-rank").css("display","block");
    }

    marqueeAnimation($('.feed #destacado:visible'), "marquee_one");
    marqueeAnimation($('.feed #dataCurioso:visible'), "marquee_two");
  });

  $(window).on("resize", function() {
    if($(window).width() <= 520)
    {
      $(".header-rank").css("display","none");
    }
    else
    {
      $(".header-rank").css("display","block");
    }

    marqueeAnimation($('.feed #destacado:visible'), "marquee_one");
    marqueeAnimation($('.feed #dataCurioso:visible'), "marquee_two");
  });

  $(".m-main .menu-item").on("click", function() {
    $(".modal-content").fadeOut(10);
    var filter = $(this).attr('data-filter');
    $(".modal-title").html($(this).html());
    $(filter).fadeIn(10);
    $(".modal").delay(20).fadeIn("fast");
  });

  $(".modal-close").on("click touchstart", function() {
    $(".modal").fadeOut("fast");
  });

  var IMG_WIDTH = 324;
  var currentImg=0;
  var maxImages=6;
  var speed=500;

  $("#imgs").css("width", (IMG_WIDTH*maxImages) + "px");
          
  var imgs;
    
  var swipeOptions=
  {
    triggerOnTouchEnd : true, 
    swipeStatus : swipeStatus,
    allowPageScroll:"vertical",
    threshold:75      
    }
          
  $(function()
  {       
    imgs = $("#imgs");
    imgs.swipe( swipeOptions );
  });
        
    
  /**
  * Catch each phase of the swipe.
  * move : we drag the div.
  * cancel : we animate back to where we were
  * end : we animate to the next image
  */      
  function swipeStatus(event, phase, direction, distance)
  {
    //If we are moving before swipe, and we are going Lor R in X mode, or U or D in Y mode then drag.
    if( phase=="move" && (direction=="left" || direction=="right") )
    {
      var duration=0;   
      if (direction == "left")
        scrollImages((IMG_WIDTH * currentImg) + distance, duration);     
      else if (direction == "right")
        scrollImages((IMG_WIDTH * currentImg) - distance, duration);     
    }    
    else if ( phase == "cancel")
    {
      scrollImages(IMG_WIDTH * currentImg, speed);
    }    
    else if ( phase =="end" )
    {
      if (direction == "right")
        previousImage()
      else if (direction == "left")     
        nextImage()
    }
  }

  function previousImage()
  {
    currentImg = Math.max(currentImg-1, 0);
    scrollImages( IMG_WIDTH * currentImg, speed);
  }
        
  function nextImage()
  {
    currentImg = Math.min(currentImg+1, maxImages-1);
    scrollImages( IMG_WIDTH * currentImg, speed);
  }
    
  /**
  * Manuallt update the position of the imgs on drag
  */
  function scrollImages(distance, duration)
  {
    imgs.css("-webkit-transition-duration", (duration/1000).toFixed(1) + "s");   
    //inverse the number we set in the css
    var value = (distance<0 ? "" : "-") + Math.abs(distance).toString();   
    imgs.css("-webkit-transform", "translate3d("+value +"px,0px,0px)");
  }

  $('.settings #gear').sidr();

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

  $("#close").on("click touchstart", function() {
    $.sidr('close', 'sidr');
  });

});