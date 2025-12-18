// DROPDOWN MENU
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// CONTENT CARD TOGGLE
const navLinks = document.querySelectorAll("#dropdownMenu a");
const contentCards = document.querySelectorAll(".content-card");

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const targetId = link.getAttribute("data-target");

    contentCards.forEach(card => {
      card.style.display = "none";
    });

    document.getElementById(targetId).style.display = "block";
    dropdownMenu.style.display = "none";
  });
});

// MODAL
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// FORM VALIDATION
const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "" || email === "") {
    message.textContent = "All fields are required.";
    message.style.color = "red";
    return;
  }

  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";

  setTimeout(() => {
    form.reset();
    message.textContent = "";
  }, 2000);
});
