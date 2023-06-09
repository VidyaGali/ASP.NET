
// --------------------------------navbar-----------------------


window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      document.getElementById('NavMain').classList.add('navbar-fixed-top');

      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    }
    else {
      document.getElementById('NavMain').classList.remove('navbar-fixed-top');


      // remove padding top from body
      document.body.style.paddingTop = '0px';
    } 
});


$(document).ready(function () {

// Scroll spy
$('body').scrollspy({
target: "#NavMain",
offset: 50
});

$(window).scroll(function(){
$(".nav-item").removeClass("active");
$(".active").parent().addClass("active");
})

});


// ------------------------------first  carousel-------------
$('#teamCarousel').owlCarousel({
    loop:true,
    margin:10,
autoplay:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})


//   ----------------------------------------filter-----------------------------------

    
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
    // deactivate existing active 'filter-item'
    filterContainer.querySelector(".active").classList.remove("active");
    // activate new 'filter-item'
    event.target.classList.add("active");
    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
       item.classList.remove("hide");
        item.classList.add("show");
      }
      else{
       item.classList.remove("show");
       item.classList.add("hide");
      }
    });
  }
});



// ---------------------------dropdown-----------------

$(document).ready(function () {
  $('.navbar-default .navbar-nav > li.dropdown').hover(function () {
      $('ul.dropdown-menu', this).stop(true, true).slideDown('fast');
      $(this).addClass('open');
  }, function () {
      $('ul.dropdown-menu', this).stop(true, true).slideUp('fast');
      $(this).removeClass('open');
  });
});


    // ------------------------------second  carousel-------------
    $('#selector').owlCarousel({
      loop:true,
      items:3,
      responsiveClass:true,
      slideperView:1,
      dots:true,
      button:false,
      margin:100,
      autoplayTimeout:8500,
      smartSpeed:450,
      autoplay: true,
      center: true,
      nav:false,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });
