document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const submitBtn = form.querySelector(".submit-btn");

  function checkValidity() {
    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();

    const validEmail = /^[a-zA-Z0-9._%+-]+@sau\.ac\.in$/i.test(email);
    const validPhone = /^\d{10}$/.test(phone);

    if (form.checkValidity() && validEmail && validPhone) {
      submitBtn.disabled = false;
      submitBtn.classList.add("active");
    } else {
      submitBtn.disabled = true;
      submitBtn.classList.remove("active");
    }
  }

  form.addEventListener("input", checkValidity);
  form.addEventListener("change", checkValidity);
  checkValidity();

  form.addEventListener("submit", (e) => {
    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();

    if (!/^[a-zA-Z0-9._%+-]+@sau\.ac\.in$/i.test(email)) {
      alert("Please use your official college email (must end with @sau.ac.in).");
      e.preventDefault();
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      e.preventDefault();
      return;
    }

    alert("Application submitted successfully!");
  });
});
