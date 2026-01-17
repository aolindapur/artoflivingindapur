// Reserved for future enhancements
// Example:
// - Smooth scrolling
// - Mobile menu
// - Form validation
// - Event registration
function openModal(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("imgModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
