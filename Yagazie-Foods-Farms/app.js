/* Small interaction layer for the assignment site.
   HTML/CSS carries the project, while this file keeps form feedback friendly. */
const yearSlots = document.querySelectorAll("[data-year]");
yearSlots.forEach((slot) => {
  slot.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("[data-contact-form]");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = contactForm.querySelector("[data-form-status]");
    status.textContent = "Thank you. Yagazie Foods and Farms will reply with prices and delivery details.";
    contactForm.reset();
  });
}
