AOS.init();

jQuery(".regular").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    prevArrow: '<button class="prevArrow"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="nextArrow"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });



  jQuery(".product").slick({
    slidesToShow: 5,
    loop: true,
    autoplay: true,
    prevArrow: '<button class="prevArrow"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="nextArrow"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 2
        }
      }
    ]
  });

  jQuery(".categorySlide").slick({
    slidesToShow: 3,
    loop: true,
    autoplay: true,
    prevArrow: '<button class="prevArrow"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="nextArrow"><i class="fa fa-long-arrow-right"></i></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }
    ]
  });

  jQuery(".banner").slick({
    slidesToShow: 1,
    loop: true,
    autoplay: false,
    prevArrow: false,
    nextArrow: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  
  jQuery('.center').slick({
    autoplay: false,
    centerPadding: '0px',
    infinite: true,
    loop: true,
    centerMode: false,
    slidesToShow: 2,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
    
  });

  jQuery('.centerMode').slick({
    autoplay: true,
    centerPadding: '60px',
    centerMode: true,
    infinite: true,
    loop: true,
    slidesToShow: 2,
    prevArrow: false,
    nextArrow: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  jQuery('.store .slideBtn').click(function(){
    jQuery('.store button.nextArrow').trigger('click');
})

jQuery('.category .slideBtn').click(function(){
    jQuery('.category button.nextArrow').trigger('click');
})



// var rangeOne = document.querySelector('input[name="rangeOne"]'),
//   rangeTwo = document.querySelector('input[name="rangeTwo"]'),
//   outputOne = document.querySelector('.outputOne'),
//   outputTwo = document.querySelector('.outputTwo'),
//   inclRange = document.querySelector('.incl-range'),
//   updateView = function () {
//     if (this.getAttribute('name') === 'rangeOne') {
//       outputOne.innerHTML = '$' + this.value;
//       outputOne.style.left = this.value / this.getAttribute('max') * 100 + '%';
//     } else {
//       outputTwo.style.left = this.value / this.getAttribute('max') * 100 + '%';
//       outputTwo.innerHTML = '$' + this.value
//     }
//     if (parseInt(rangeOne.value) > parseInt(rangeTwo.value)) {
//       inclRange.style.width = (rangeOne.value - rangeTwo.value) / this.getAttribute('max') * 100 + '%';
//       inclRange.style.left = rangeTwo.value / this.getAttribute('max') * 100 + '%';
//     } else {
//       inclRange.style.width = (rangeTwo.value - rangeOne.value) / this.getAttribute('max') * 100 + '%';
//       inclRange.style.left = rangeOne.value / this.getAttribute('max') * 100 + '%';
//     }
//   };

// document.addEventListener('DOMContentLoaded', function () {
//   updateView.call(rangeOne);
//   updateView.call(rangeTwo);
//   $('input[type="range"]').on('mouseup', function () {
//     this.blur();
//   }).on('mousedown input', function () {
//     updateView.call(this);
//   });
// });