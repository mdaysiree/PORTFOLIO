const scrollElements = document.querySelectorAll(
  ".skill-card.animate-on-scroll",
);

const elementInView = (el, dividend = 1.25) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element, index) => {
  setTimeout(() => {
    element.classList.add("visible");
  }, index * 200);
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el, index) => {
    if (elementInView(el)) {
      if (!el.classList.contains("visible")) {
        displayScrollElement(el, index);
      }
    }
  });
};

const container = document.querySelector(".particles");

if (container) {
  const shapes = ["circle", "diamond", "heart"];

  for (let i = 0; i < 60; i++) {
    const span = document.createElement("span");

    const type = shapes[Math.floor(Math.random() * shapes.length)];
    span.classList.add(type);

    span.style.left = Math.random() * 100 + "%";
    span.style.animationDelay = Math.random() * 5 + "s";
    span.style.animationDuration = 6 + Math.random() * 6 + "s";

    container.appendChild(span);
  }
}

const aboutText = document.querySelector(".about-text");
const aboutImage = document.querySelector(".about-image-container");

const showAbout = () => {
  const triggerPoint = window.innerHeight * 0.8;

  if (aboutText && aboutImage) {
    if (aboutText.getBoundingClientRect().top < triggerPoint) {
      aboutText.classList.add("show");
      aboutImage.classList.add("show");
    }
  }
};

const projectCards = document.querySelectorAll(".project-card");

const showProjects = () => {
  const triggerPoint = window.innerHeight * 0.85;

  projectCards.forEach((card, index) => {
    if (card.getBoundingClientRect().top < triggerPoint) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 200);
    }
  });
};

const contactItems = document.querySelectorAll(".contact-item");

const showContact = () => {
  const triggerPoint = window.innerHeight * 0.9;

  contactItems.forEach((item, index) => {
    if (item.getBoundingClientRect().top < triggerPoint) {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 200);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
  showAbout();
  showProjects();
  showContact();
});
