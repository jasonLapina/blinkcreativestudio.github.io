import packages from "./data/packages.js";

$(document).ready(function(){
  $(this).scrollTop(0);
});

// Animation on Scroll
AOS.init({
  offset: 150,
  duration: 700,
  easing: 'ease',
  delay: 100,
  once: true
});

// Navbar Responsive 
$('#burger').click(function(){
    //Toggles the burger menu
    if ( $('#burger').attr('aria-pressed') == 'false'){
      $('#burger').attr("aria-pressed", 'true');
      $('#burger').attr("aria-expanded", 'true');
      $('#navbar-list').attr("aria-hidden", 'false');
      $('body').addClass("overflow");   
    } else {
      $('#burger').attr("aria-pressed", 'false');
      $('#burger').attr("aria-expanded", 'false');
      $('#navbar-list').attr("aria-hidden", 'true');
      $('body').removeClass("overflow");  
    }
  });	

$('#menu-contact').click(function(){
    //Toggles the burger menu
    if ( $('body').hasClass('overflow') == 'true'){
      $('#burger').attr("aria-pressed", 'true');
      $('#burger').attr("aria-pressed", 'true');
      $('#burger').attr("aria-expanded", 'true');
      $('#navbar-list').attr("aria-hidden", 'false');
      $('body').addClass("overflow");   
    } else {
      $('#burger').attr("aria-pressed", 'false');
      $('#burger').attr("aria-expanded", 'false');
      $('#navbar-list').attr("aria-hidden", 'true');
      $('body').removeClass("overflow");   
    }
  });	

  // Navbar Scroll Effect
  $(function(){
    var prevScroll = 1,
        startScroll = 0,
        curDir = 'down',
        prevDir = 'up';

    $(window).scroll(function(){
        if($(this).scrollTop() >= prevScroll){
            curDir = 'down';
            if(curDir != prevDir){
            $('.navbar').stop();
            $('.navbar').addClass('shadow');
            prevDir = curDir;
            }
        }  else if($(this).scrollTop() <= startScroll) {
          $('.navbar').removeClass('shadow');
          prevDir = curDir;
        } else {
          curDir = 'up';
          if(curDir != prevDir){
          $('.navbar').stop();
          $('.navbar').addClass('shadow');
          prevDir = curDir;
          }
      }
        
        prevScroll = $(this).scrollTop();
    });
  })
