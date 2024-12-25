const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

// Function to show the slide at the given index
function showSlide(index) {
  const slider = document.querySelector(".slider");
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Automatic slideshow
function autoSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Event listener for dots
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentIndex = parseInt(dot.getAttribute("data-index"));
    showSlide(currentIndex);
  });
});

// Start the automatic slideshow
setInterval(autoSlide, 3000);

// Initialize the first slide as active
showSlide(0);
