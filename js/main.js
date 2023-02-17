$(document).ready(function(){
  $(this).scrollTop(0);

  const modalContainer = document.querySelector('.modal-container');
  const modalNextBtn = document.querySelector('#modal-next-btn');
  const package = document.querySelector('#package');
  const body = document.querySelector('body');

  // Open Booking Modal for all buttons across website
  for ( const openBtn of document.querySelectorAll('.open-modal-button')) {
    openBtn.addEventListener('click', () => {
      modalContainer.classList.add('show');
  
      if(!modalContainer.classList.contains('show')) {
        body.style.overflow = 'auto';
      } else {
        body.style.overflow = 'hidden';
      }
    })
  }
  
  // Close Booking Modal for all buttons across website
  for ( const closeBtn of document.querySelectorAll('.close-modal-button')) {
    closeBtn.addEventListener('click', () => {
      modalContainer.classList.remove('show');
      body.style.overflow = 'auto';
    })
  }

  // Open Calendly Modal for all buttons across website
  for ( const openCalBtn of document.querySelectorAll('.open-calendly-modal')) {
    openCalBtn.addEventListener('click', () => {
      modalContainer.classList.remove('show');
      body.style.overflow = 'auto';
    
      if (package.value.toLowerCase() === "studio package") {
        // Calendly.initPopupWidget({url: 'https://calendly.com/blinkcreativestudio/studio-bookings?hide_gdpr_banner=1'});return false;
        Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/30min?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
      } else if (package.value.toLowerCase() === "graduation package") {
        Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/graduation-pacakge?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
      } else if (package.value.toLowerCase() === "up graduation package") {
        Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
      }
    
      return false;
    })
  }
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


// Showreel Button

const showreelBtn = document.querySelector('#showreel-btn');
const videoContainer = document.querySelector('.video-container');
const showReel = document.querySelector('.video-container video')
const close = document.querySelector('.close');

showreelBtn.addEventListener('click',()=>{
    videoContainer.classList.add('show');
    showReel.play();
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
    showReel.pause();
})

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    videoContainer.classList.remove('show');
    showReel.pause();
  }
})


// Booking Modal

// function openModal() {
//   modalContainer.classList.add('show');

//   if(!modalContainer.classList.contains('show')) {
//     body.style.overflow = 'auto';
//   } else {
//     body.style.overflow = 'hidden';
//   }
// }

// function closeModal() {
//   modalContainer.classList.remove('show');
//   body.style.overflow = 'auto';
// }

// Next button
// function redirect() {

//   modalContainer.classList.remove('show');
//   body.style.overflow = 'auto';

//   if (package.value.toLowerCase() === "studio package") {
//     // Calendly.initPopupWidget({url: 'https://calendly.com/blinkcreativestudio/studio-bookings?hide_gdpr_banner=1'});return false;
//     Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/30min?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
//   } else if (package.value.toLowerCase() === "graduation package") {
//     Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/graduation-pacakge?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
//   } else if (package.value.toLowerCase() === "up graduation package") {
//     Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package?background_color=f2f2f2&text_color=181818&primary_color=a30a27'});
//   }

//   return false;
// }

const dropdownArrow = document.querySelector('.fa-angle-down');
const dropdown = document.querySelector('.dropdown-menu')
