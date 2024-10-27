// $(document).ready(function (){
//     $(window).scroll(function(){
//       var pixelstop = $(window).scrollTop();
//       $(".row ").css("filter", "contrast(" + pixelstop + "%)");
//     });
//   });

  // $(document).ready(function (){
  //   $(window).scroll(function(){
      
  //     var pixelstop = 100+100*$(window).scrollTop()/$(window).height();
  //     console.log(pixelstop);
  //     $(".container-fluid ").css("filter", "contrast(" + pixelstop + "%)");
  //   });
  // })

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var upperSection = document.querySelector('.container-fluid');
    var opacity = 1 - (scrollTop / upperSection.offsetHeight); // Calculate opacity based on scroll position
    
    upperSection.style.opacity = opacity;
  });