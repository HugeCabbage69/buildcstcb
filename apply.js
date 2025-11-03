document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const submitBtn = form.querySelector(".submit-btn");

  function checkValidity() {
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();


    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // generic email check
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

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
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
