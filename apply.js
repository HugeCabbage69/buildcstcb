document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const submitBtn = form.querySelector(".submit-btn");

  emailjs.init("uVO7OJqsH4jQI30yM");

  function checkValidity() {
    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();

    const validEmail = /^[a-zA-Z0-9._%+-]+@sau\.ac\.in$/i.test(email);
    const validPhone = /^\d{10}$/.test(phone);

    // built-in validity + custom checks
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
    e.preventDefault();

    const email = form["email"].value.trim();
    const phone = form["phone"].value.trim();

    // Final validation before sending
    if (!/^[a-zA-Z0-9._%+-]+@sau\.ac\.in$/i.test(email)) {
      alert("Please use your official college email (must end with @sau.ac.in).");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const uuid = Math.floor(1000000 + Math.random() * 9000000);

    const data = {
      uuid: uuid,
      first_name: form["first-name"].value,
      last_name: form["last-name"].value || "Not Provided",
      course: form["course"].value,
      year: form["year"].value,
      section: form["section"].value,
      email: email,
      phone: phone,
      field: form["field"].value,
      familiarity: form["familiarity"].value,
      other_wing: form["other-wing"].checked ? "Yes" : "No",
      motivation: form["motivation"].value,
      portfolio: form["portfolio"].value || "Not Provided"
    };

    emailjs.send("service_ywey0pu", "template_bmbiu2a", data)
      .then(() => {
        alert("Application submitted successfully!\n\nPlease check your email and DO NOT lose your UUID.\nYour UUID: " + uuid);
        form.reset();
        checkValidity();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send application. Contact 9971500718\nError: " + (err.text || err));
      });
  });
});
