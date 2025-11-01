document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apply-form");
  const submitBtn = form.querySelector(".submit-btn");

  emailjs.init("uVO7OJqsH4jQI30yM");

  function checkValidity() {
    if (form.checkValidity()) {
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

    const uuid = Math.floor(1000000 + Math.random() * 9000000);

    const data = {
      uuid: uuid,
      first_name: form["first-name"].value,
      last_name: form["last-name"].value || "Not Provided",
      course: form["course"].value,
      year: form["year"].value,
      section: form["section"].value,
      email: form["email"].value,
      phone: form["phone"].value,
      field: form["field"].value,
      familiarity: form["familiarity"].value,
      other_wing: form["other-wing"].checked ? "Yes" : "No",
      motivation: form["motivation"].value,
      portfolio: form["portfolio"].value || "Not Provided"
    };

    emailjs.send("service_ywey0pu", "template_bmbiu2a", data)
      .then(() => {
        alert("Application submitted successfully! Please check your email and DO NOT loose your UUID.\nYour UUID: " + uuid);
        form.reset();
        checkValidity();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        alert("Failed to send application. Contact 9971500718\nError: " + (err.text || err));
      });
  });
});
