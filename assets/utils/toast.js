// Custom toast notification function
function showToast(message, type) {
  const toast = document.getElementById("toast");
  toast.className = `toast ${
    type === "success" ? "toast-success" : "toast-error"
  }`;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
