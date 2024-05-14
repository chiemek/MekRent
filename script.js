"use strict";

const realEstateList = document.querySelectorAll(".real-estate");
const dropDownList = document.querySelectorAll(".drop");

realEstateList.forEach((realEstateItem, index) => {
  realEstateItem.addEventListener("click", function () {
    dropDownList[index].classList.toggle("hidden");
  });
});
// ///////////////////////

// hamburger menu
const hamburger = document.querySelector(".Hamburger");
const nav = document.querySelector(".Hamburger-open");

hamburger.addEventListener("click", function () {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

//
// //////////////////////////////////////////////////
// img sliders 4 at a time
// document.addEventListener("DOMContentLoaded", function () {
//   const sliderContainer = document.querySelector(".for-you-container");
//   const slidersCard = document.querySelectorAll(".for-you-card");
//   let currentIndex = 0;
//   let touchStartX = 0;
//   let touchEndX = 0;

//   function slideNext() {
//     const imageWidth = slidersCard[0].offsetWidth;
//     currentIndex++;
//     if (currentIndex >= slidersCard.length) {
//       currentIndex = 0; // Reset to beginning
//     }
//     sliderContainer.style.transform = `translateX(-${
//       imageWidth * currentIndex
//     }px)`;
//   }

//   // Automatically slide every 5 seconds
//   setInterval(slideNext, 5000);

//   // Add event listener for next button click
//   document.querySelector(".next-button").addEventListener("click", slideNext);

//   // Add event listener for previous button click
//   document
//     .querySelector(".previous-button")
//     .addEventListener("click", function () {
//       const imageWidth = slidersCard[0].offsetWidth;
//       currentIndex--;
//       if (currentIndex < 0) {
//         currentIndex = slidersCard.length - 1; // Go to last slide
//       }
//       sliderContainer.style.transform = `translateX(-${
//         imageWidth * currentIndex
//       }px)`;
//     });

//   // Add event listener for touch start
//   sliderContainer.addEventListener("touchstart", function (event) {
//     touchStartX = event.touches[0].screenX;
//   });

//   // Add event listener for touch move
//   sliderContainer.addEventListener("touchmove", function (event) {
//     touchEndX = event.touches[0].screenX;
//   });

//   // Add event listener for touch end
//   sliderContainer.addEventListener("touchend", function () {
//     const imageWidth = slidersCard[0].offsetWidth;
//     if (touchEndX < touchStartX) {
//       // Swipe right
//       slideNext();
//     } else if (touchEndX > touchStartX) {
//       // Swipe left
//       const previousIndex = currentIndex - 1;
//       if (previousIndex < 0) {
//         currentIndex = slidersCard.length - 1; // Go to last slide
//       } else {
//         currentIndex = previousIndex;
//       }
//     }
//     sliderContainer.style.transform = `translateX(-${
//       imageWidth * currentIndex
//     }px)`;
//     // Add this to reset to beginning if at end
//     if (currentIndex >= slidersCard.length) {
//       currentIndex = 0;
//     }
//   });
// });

//
// ////////////////////////////////////////////////
// image slider 1 at a time
// logic for the slides
const cardCon = document.querySelectorAll(".cards-container");

cardCon.forEach((container) => {
  const btnLeft = container.querySelectorAll(".slider__btn--left");
  const btnRight = container.querySelectorAll(".slider__btn--right");
  const slides = container.querySelectorAll(".cards");
  let curSlide = 0;
  const maxSlide = slides.length - 1;
  // change slide
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  // next slide
  const nextSLide = function () {
    if (curSlide == maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  btnRight.forEach((right) => {
    right.addEventListener("click", nextSLide);
  });
  // previous slide
  const previuosSlide = function () {
    if (curSlide == 0) {
      curSlide = maxSlide;
      // console.log(curSlide);
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };
  btnLeft.forEach((left) => {
    left.addEventListener("click", previuosSlide);
  });
});

//
// ////////////////////////////////////////////
//  subheading drop-down
document.querySelector(".sub-heading").addEventListener("click", function (e) {
  const clickedForSaleItem = e.target.closest(".for-sale");
  if (clickedForSaleItem) {
    const allDropContainers = document.querySelectorAll(".remove");

    allDropContainers.forEach((dropContainer) => {
      if (dropContainer !== clickedForSaleItem.nextElementSibling) {
        dropContainer.classList.add("hidden");
      }
    });

    const relatedDropContainer = clickedForSaleItem.nextElementSibling;
    relatedDropContainer.classList.toggle("hidden");
  }
});

//
//
// ///////////////////////////////////////////

//pop up
// const popBtn = document.querySelector(".card-details");
// const pop = document.getElementById("pop-upMenu");

// popBtn.addEventListener("click", function () {
//   pop.style.display = "flex";
// });

//
//
//
////////////////////////////////////
//
//

//
// /////////////////////////////////////////////
// map
let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.querySelector(".map"), {
    center: { lat: 6.51003, lng: 3.36061 },
    zoom: 8,
  });
}

initMap();
