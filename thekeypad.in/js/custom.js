$(document).ready(function(){

    $ (".toggleicon").click(function(){
      $ (".toggleicon").toggleClass("togglecross")
      $ (".navs").toggleClass("navs_open")
    })
  
  
  
  
      $('.testimonial-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          autoplay: true,
          centerPadding: '250px',
          responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '10px',
                  infinite: true,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '50px',
                  centerMode: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerPadding: '50px',
                  centerMode: false,
                  unslick: 'none'
                }
              }
            ]
      });
  
  
  
  
  
      var a = 0;
      $(window).scroll(function() {
      
        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.count').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
      
              {
      
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
      
              });
          });
          a = 1;
        }
      
      });
  
  
  
  
    });
  
  
    ////intersection observer
  // $(document).ready(function() {
  //   var counters = $(".percent");
  //   var countersQuantity = counters.length;
    
  //   var observerOptions = {
  //     threshold: 0.3 // Triggers when the element is fully in view
  //   };
    
  //   var observer = new IntersectionObserver(function(entries, observer) {
  //     entries.forEach(function(entry) {
  //       if (entry.isIntersecting) {
  //         var target = entry.target;
  //         var value = parseInt(target.innerHTML);
  //         count(0, value, target);
  //         observer.unobserve(target); // Unobserve the target once animation is triggered
  //       }
  //     });
  //   }, observerOptions);
    
  //   for (var i = 0; i < countersQuantity; i++) {
  //     observer.observe(counters[i]);
  //   }
    
  //   function count(start, value, target) {
  //     var localStart = start;
  //     var interval = setInterval(function() {
  //       if (localStart < value) {
  //         localStart++;
  //         target.innerHTML = localStart;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 650);
  //   }
  // });
  
  // Back to top
  var amountScrolled = 400;
  var amountScrolledNav = 25;
  
  $(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
      $('.hovertop_btn').addClass('show');
    } else {
      $('.hovertop_btn').removeClass('show');
    }
  });
  
  $('.hovertop_btn').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;
  });
  
  
  
  
  
  
  
  
  