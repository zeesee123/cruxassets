var swiper1 = new Swiper(".clientSlider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    allowTouchMove: false,
    speed: 3000,
     autoplay: {
      delay: 0,
    },
    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 7,
        spaceBetween: 50,
      },
    },
  });
  var swiper2 = new Swiper(".testi_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

  var swiper02 = new Swiper(".award-slider", {
    slidesPerView: 1,
    spaceBetween: 50,
    autoplay: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper3 = new Swiper(".four_slider", {
    slidesPerView: 1,
    spaceBetween: 1,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 4,
      },
    },
  });



  var swiper4 = new Swiper(".blog_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 50,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });


  var swiper20 = new Swiper(".industries_card_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 80,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 60,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });





  document.addEventListener("DOMContentLoaded", function () {
    var swiper10 = new Swiper(".scrollSlider", {
      direction: "vertical", // Sets vertical scrolling
      slidesPerView: 1, // Displays one slide at a time
      spaceBetween: 0, // Adds spacing between slides
      mousewheel: true, // Enables scrolling with the mouse wheel
      grid: {
        rows: 1,
      },
      pagination: {
        el: ".swiper-pagination", // Pagination element
        clickable: true, // Makes pagination bullets clickable
      },
    });
  });









  var swiper02 = new Swiper(".work_slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 autoplay: {
      delay: 5000,
    },

    breakpoints: {
      320: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
  });


   var swiper = new Swiper(".grab-slider", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".grab-slider", {
    effect: "cards",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper01 = new Swiper(".clientcorporate", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    allowTouchMove: false,

    speed: 3000,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });


  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  scrollToTopBtn.addEventListener('click', () => {
    const duration = window.innerWidth <= 768 ? 100 : 700;
      const start = window.scrollY;
      const startTime = performance.now();

      function scrollStep(timestamp) {
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          window.scrollTo(0, start * (1 - progress));

          if (progress < 1) {
              requestAnimationFrame(scrollStep);
          }
      }

      requestAnimationFrame(scrollStep);
  });


   // home page countable js
   document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll("#count");

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                startCounting(entry.target);
                counterObserver.unobserve(entry.target); // Stop observing after counting starts
            }
        });
    });

    counters.forEach((counter) => counterObserver.observe(counter));

    function startCounting(element) {
        const targetValue = element.getAttribute("data-target");

        // Detect the multiplier (K, M, +) and convert to number
        let multiplier = 1;
        let cleanTarget = targetValue.replace(/\D/g, ""); // Extract digits only

        if (targetValue.includes("K")) {
            multiplier = 10000;
        } else if (targetValue.includes("M")) {
            multiplier = 1000000;
        }

        const finalTarget = parseInt(cleanTarget) * multiplier;

        let count = 0;
        const speed = 20; // Lower = faster

        const updateCount = () => {
            if (count < finalTarget) {
                count += Math.ceil(finalTarget / 100); // Increment smoothly
                element.textContent = formatNumber(count, targetValue);
                setTimeout(updateCount, speed);
            } else {
                element.textContent = targetValue; // Exact target value
            }
        };

        updateCount();
    }

    // Formatting function for +, K, and M values
    function formatNumber(value, target) {
        if (target.includes("K")) {
            return (value / 1000).toFixed(1).replace(".0", "") + "K";
        } else if (target.includes("M")) {
            return (value / 1000000).toFixed(1).replace(".0", "") + "M";
        } else if (target.includes("+")) {
            return value + "+";
        } else {
            return value; // Default format
        }
    }
});
