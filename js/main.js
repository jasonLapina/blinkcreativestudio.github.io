import packages from "./data/packages.js";

$(document).ready(function(){
  $(this).scrollTop(0);

  const STUDIO_PACKAGE = "studio package";
  const GRAD_PACKAGE = "graduation package";
  const UP_GRAD_PACKAGE = "up graduation package";

  const modalContainer = document.querySelector('.modal-container');
  const body = document.querySelector('body');
  const selectTagPackage = document.querySelector('#package');
  const selectTagSubPackage = document.querySelector('#sub-package');
  const chooseDateButton = document.querySelector('#modal-next-btn');
  const packageDetails = document.querySelector('.package-details');
  const mainImg = document.querySelector('.main-img');
  const studioRentalBtn = document.querySelector('#studio-rental');

  // Package Details
  const packageTitle = document.querySelector(".accordion-header");
  const packagePrice = document.querySelector(".price");
  const packageDescription = document.querySelector("#package-desc-content");
  const packageDescription2 = document.querySelector("#package-desc-content-2");
  const packageDescriptionContainer = document.querySelector(".package-desc-container");
  const packageInclusion = document.querySelector("#package-inclusions-content");
  const packageButton = document.querySelector("#product-details-btn");

  const content = document.querySelectorAll('.accordion-body');

  const studioPackages = ['Basic A', 'Basic B', 'Standard', 'Deluxe', 'Premium'];
  const gradPackages = ['Bronze', 'Silver'];
  const upGradPackages = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'];

  function showPackageDetails(e) {
    var pack = packages.filter((p) => {
      return p.category === e.target.parentElement.id && p.package === e.target.id;
    })

    // Makes sure the package contains the correct data
    if (pack[0] != null) {
      packageTitle.innerHTML = pack[0].name;
      packagePrice.innerHTML = pack[0].price;
      packageDescription.innerHTML = pack[0].desc;
      packageDescription2.innerHTML = pack[0].desc2;      
      packageInclusion.replaceChildren();

      // Lists inclusions as list item
      for ( var item of pack[0].inclusions) {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(item));
        
        packageInclusion.appendChild(node);
      }

      // Changes button function
      packageButton.onclick = function() {
        Calendly.initPopupWidget({url: pack[0].calendly_link});
      }
    }
    // Returns default 
    else {
      packageTitle.innerHTML = "Package Name"
      packagePrice.innerHTML = "----.--";
      packageDescription.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
      packageInclusion.replaceChildren();
    
      var node = document.createElement('li');
      node.appendChild(document.createTextNode(""));
      
      packageInclusion.appendChild(node);

      // Changes button function
      packageButton.onclick = function() {
        return;
      }
    }

    packageDetails.classList.add('show');
    mainImg.classList.add('hidden');
  }

  function hidePackageDetails() {
    packageDetails.classList.remove('show');
    mainImg.classList.remove('hidden');
  }

  function packageOnChange() {
    chooseDateButton.classList.remove('disabled');
    selectTagSubPackage.length = 0;

    if ( selectTagPackage.value.toLowerCase() === GRAD_PACKAGE ) {
      for (var i = 0; i < gradPackages.length; i++) {
        selectTagSubPackage.options[selectTagSubPackage.options.length] = new Option(gradPackages[i], gradPackages[i]);
      }
    }
    else if ( selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE ) {
      for (var i = 0; i < upGradPackages.length; i++) {
        selectTagSubPackage.options[selectTagSubPackage.options.length] = new Option(upGradPackages[i], upGradPackages[i]);
      }
    }
    else {
      for (var i = 0; i < studioPackages.length; i++) {
        selectTagSubPackage.options[selectTagSubPackage.options.length] = new Option(studioPackages[i], studioPackages[i]);
      }
    }
  }

  function openModal() {
    modalContainer.classList.add('show');

    if(!modalContainer.classList.contains('show')) {
      body.style.overflow = 'auto';
    } else {
      body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    modalContainer.classList.remove('show');
    body.style.overflow = 'auto';
  }

  function openCalendly() {
    
    closeModal();

    if (selectTagPackage.value.toLowerCase() === STUDIO_PACKAGE && selectTagSubPackage.value.toLowerCase() === "basic a") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/studio-basic-a'});
    } 
    else if (selectTagPackage.value.toLowerCase() === STUDIO_PACKAGE && selectTagSubPackage.value.toLowerCase() === "basic b") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/studio-package-basic-b'});
    } 
    else if (selectTagPackage.value.toLowerCase() === STUDIO_PACKAGE && selectTagSubPackage.value.toLowerCase() === "standard") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/studio-package-standard'});
    } 
    else if (selectTagPackage.value.toLowerCase() === STUDIO_PACKAGE && selectTagSubPackage.value.toLowerCase() === "deluxe") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/studio-package-deluxe'});
    } 
    else if (selectTagPackage.value.toLowerCase() === STUDIO_PACKAGE && selectTagSubPackage.value.toLowerCase() === "premium") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/studio-package-premium'});
    } 
    else if (selectTagPackage.value.toLowerCase() === GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "bronze") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/graduation-pacakge'});
    } 
    else if (selectTagPackage.value.toLowerCase() === GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "silver") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/graduation-package-silver'});
    } 
    else if (selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "bronze") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package-bronze'});
    } 
    else if (selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "silver") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package-silver'});
    } 
    else if (selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "gold") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package-gold'});
    } 
    else if (selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "platinum") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package-gold-clone'});
    } 
    else if (selectTagPackage.value.toLowerCase() === UP_GRAD_PACKAGE && selectTagSubPackage.value.toLowerCase() === "diamond") {
      Calendly.initPopupWidget({url: 'https://calendly.com/gileslabastilla-blink/up-graduation-package-diamond'});
    } 
    
    return false;
  }

  studioRentalBtn.addEventListener('click', (e) => {
    showPackageDetails(e);
  })

  // Open Booking Modal for all buttons across website
  for ( const openBtn of document.querySelectorAll('.open-modal-button')) {
    openBtn.addEventListener('click', () => {
      openModal();
    })
  }
  
  // Close Booking Modal for all buttons across website
  for ( const closeBtn of document.querySelectorAll('.close-modal-button')) {
    closeBtn.addEventListener('click', () => {
      closeModal();
    })
  }

  // Open Calendly Modal for all buttons across website
  for ( const openCalBtn of document.querySelectorAll('.open-calendly-modal')) {
    openCalBtn.addEventListener('click', () => {
      if (selectTagPackage.value === null || selectTagPackage.value === "") return;
      openCalendly();
    })
  }

  // Changes the options for the subpackages on package change
  for ( const pack of document.querySelectorAll('#package')) {
    pack.addEventListener('change', () => {
      packageOnChange();
    })
  }

  // Opens package items on click
  for ( const title of document.querySelectorAll('.package-title')) {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
    })
  }

  // Opens package items on click
  for ( const header of document.querySelectorAll('.accordion-header')) {
    header.addEventListener('click', (e) => {

      // Closes all other inactive items
      content.forEach(content_body => {
        if (e.target.nextElementSibling != content_body && content_body.classList.contains('active')) {
          content_body.classList.remove('active');
        }
      })

      if (packageDetails.classList.contains('show')) {
        hidePackageDetails();
      }

      header.classList.toggle('active');
      if (header.id != "studio-rental") {
        const panel = header.nextElementSibling;
        panel.classList.toggle('active');
      } else {
        showPackageDetails(e);
      }
      
    })
  
    // Opens package detail section
    for ( const item of document.querySelectorAll('.package-item')) {
      item.addEventListener('click', (e) => {
        showPackageDetails(e);
      })
    }
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
