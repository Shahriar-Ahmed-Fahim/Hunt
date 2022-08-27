window.addEventListener('scroll', function () {
  var topnav = document.querySelector("#topnavbar");

  topnav.classList.toggle("fixed-nav", window.scrollY)
})


// Portfolio Part 

$('.portfolio-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
});

$('.venobox').venobox({
  border: '5px',
  framewidth: "60%",
});

// Service Slider

$('.service-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  prevArrow: '<i class="fa fa fa-chevron-up slidPrv"></i>',
  nextArrow: '<i class="fa fa-chevron-down slidNext"></i>',
  vertical: true,
  verticalSwiping: true,
  autoplay: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  speed: 1000,
  infinite: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    }
  ]
});

// Testimonial Slider

$('.testimonial-img-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.details-slider',
  dots: false,
  arrows: true,
  prevArrow: '<i class="fa fa fa-chevron-up slidPrv2"></i>',
  nextArrow: '<i class="fa fa-chevron-down slidNext2"></i>',
  vertical: true,
  verticalSwiping: true,
  centerPadding: '0px',
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false,
      }
    }
  ]
});

$('.details-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  asNavFor: '.testimonial-img-slider',
});

// Counter Part

$('.counter').counterUp({
  delay: 10,
  time: 2000,
});

// Team Part

$('.team-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
})

$('.team_venobox').venobox({
  border: '5px',
});

// Market Slider

$('.market-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    }
  ]
})











