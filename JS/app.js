// ===== Activity 4: JavaScript Basics and User Interaction =====

// Reusable toast notification function
// message: text to show, type: "success" (default) or "error"
function showToast(message, type = "success") {
  // Create the toast element
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.textContent = message;

  // Add it to the page
  document.body.appendChild(toast);

  // Small delay so the CSS animation can run
  setTimeout(function () {
    toast.classList.add("show");
  }, 10);

  // Hide and remove the toast after 3 seconds
  setTimeout(function () {
    toast.classList.remove("show");
    setTimeout(function () {
      toast.remove();
    }, 400);
  }, 3000);
}

// Smoothly scroll to a section by its id
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Run after the page has loaded
document.addEventListener("DOMContentLoaded", function () {

  // Book buttons in the match schedule table
  const bookButtons = document.querySelectorAll("#scheduleTable tbody button");

  bookButtons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      // Stop the default jump so the scroll is smooth
      event.preventDefault();

      // Get the match number and teams from the clicked row
      const row = button.closest("tr");
      const matchNumber = row.cells[0].textContent;
      const teams = row.cells[1].textContent;

      // Pre-select this match in the booking form (if the dropdown exists)
      const matchSelect = document.getElementById("match");
      if (matchSelect) {
        matchSelect.value = matchNumber;
      }

      // Scroll to the booking form and show a confirmation toast
      scrollToSection("booking");
      showToast("Match " + matchNumber + " (" + teams + ") selected! Please fill in your details.");
    });
  });

  // Hero buttons: View Schedule and Book Ticket
  const heroLinks = document.querySelectorAll(".hero-buttons a");

  heroLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");
      scrollToSection(targetId);
    });
  });

});