$(document).ready(function(){
  $("#top-sale .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
   }
  });
  //isotope filter
  var $grid =$(".grid").isotope({
    itemSelector:'.grid-item',
    layoutMode:'fitRows'
  });

  //filter items pn button click
  $("button-group").on("click","button",function(){
    var filterValue=$(this).attr(".data-filter");
    $grid.isotope({filter:filterValue});

  });

  //new items
  $("#new-phones .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:5
      }
   }
  });
  var owl = $('#team .owl-carousel');
owl.owlCarousel({
  margin: 10,
  loop: true,
  items:1,
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
  
  //blog
$("#blogs .owl-carousel").owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      780:{
        items:2
      },
      900:{
        items:3
      },
   }

});



});
