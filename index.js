// console.log("running!!");

// const nextBtn = document.querySelector("#next-slide-btn");
// const prevBtn = document.querySelector("#prev-slide-btn");

// let currentSlide = 0;

// const allSlides = document.querySelectorAll(".carousel-item");

// function goToSlide(index) {
//   allSlides.forEach((slide) => {
//     slide.classList.remove("active");
//   });
//   allSlides[index].classList.add("active");
// }

// console.log(allSlides);
// prevBtn.addEventListener("click", () => {
//   if (currentSlide <= allSlides.length) {
//     currentSlide = allSlides.length;
//     goToSlide(currentSlide);
//   } else {
//     goToSlide(currentSlide - 1);
//   }
// });
// nextBtn.addEventListener("click", () => {
//   if (currentSlide > allSlides.length) {
//     currentSlide = 0;
//     goToSlide(currentSlide);
//   } else {
//     goToSlide(currentSlide + 1);
//   }
// });

console.log("running!!");

const nextBtn = document.querySelector("#next-slide-btn");
const prevBtn = document.querySelector("#prev-slide-btn");
const allSlides = document.querySelectorAll(".carousel-item");

let currentSlide = 0;

function goToSlide(index) {
  allSlides.forEach((slide) => {
    slide.classList.remove("active");
  });
  allSlides[index].classList.add("active");
  currentSlide = index;
}

console.log(allSlides);

prevBtn.addEventListener("click", () => {
  goToSlide((currentSlide - 1 + allSlides.length) % allSlides.length);
});

nextBtn.addEventListener("click", () => {
  goToSlide((currentSlide + 1) % allSlides.length);
});
