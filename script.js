// Toggle mobile menu
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Scroll animation
const reveals = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  for (const element of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('active');
    }
  }
};

window.addEventListener('scroll', revealOnScroll);

// Form validation
const contactForm = document.getElementById('contactForm');
const messageBox = document.querySelector('.form-message');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  messageBox.textContent = "Thanks for your message! We'll be in touch.";
  contactForm.reset();
});



let currentSlide = 0;

function moveSlide(direction) {
  const slider = document.getElementById("hotelSlider");
  const slides = slider.querySelectorAll(".slide");
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;

  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}



// When clicking a hotel card, populate the contact form and scroll to the Contact section
function bookHotel(element) {
    const hotelName = element.getAttribute("data-hotel");
    const contactSection = document.getElementById("contact");
    const messageBox = document.querySelector("textarea[name='message']");
  
    // Fill the message with the hotel name
    messageBox.value = `Hello, I would like to book a room at ${hotelName}.`;
  
    // Scroll to the Contact section
    contactSection.scrollIntoView({ behavior: "smooth" });
}
