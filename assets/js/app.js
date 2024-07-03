$('.company-slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    smartSpeed: 4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

// document.addEventListener('DOMContentLoaded', function () {
//     const latestNews = document.querySelector('.latest-news');
//     const newsList = latestNews.querySelector('ul');
//     const listHeight = newsList.scrollHeight;
//     const containerHeight = latestNews.offsetHeight;
//     const midpoint = containerHeight / 2;
    
//     let scrollInterval;
//     let topPosition = 0;

//     function startScrolling() {
//       scrollInterval = setInterval(() => {
//         topPosition -= 1;
//         if (Math.abs(topPosition) >= listHeight - midpoint) {
//           topPosition = 0;
//         }
//         newsList.style.top = `${topPosition}px`;
//       }, 50); // Adjust the speed by changing the interval time
//     }

//     function stopScrolling() {
//       clearInterval(scrollInterval);
//     }

//     latestNews.addEventListener('mouseenter', stopScrolling);
//     latestNews.addEventListener('mouseleave', startScrolling);

//     // Start the scrolling when the page loads
//     startScrolling();
//   });

const mainHead = document.querySelector(".main-head");
const scrollY = window.scrollY; // Initial scroll position

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const shouldBeFixed = currentScrollY > scrollY; // Check if scrolled down

  if (shouldBeFixed) {
    mainHead.classList.add("fixed-top"); // Add 'fixed' class for styling
  } else {
    mainHead.classList.remove("fixed-top"); // Remove 'fixed' class
  }
});
