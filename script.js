document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quote-form");
  const alertBox = document.getElementById("alert-box");

  if (!form || !alertBox) {
    console.error("Form or alert box not found in DOM");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alertBox.className = "alert alert-info";
    alertBox.textContent = "Sending your request...";
    alertBox.classList.remove("d-none");

    emailjs
      .sendForm(
        "service_1oc1bl2",
        "template_0yk6y6i",
        form
      )
      .then(() => {
        alertBox.className = "alert alert-success";
        alertBox.textContent =
          "✅ Your quote request has been sent successfully!";
        form.reset();

        // auto-hide after 5 seconds
        setTimeout(() => {
          alertBox.classList.add("d-none");
        }, 5000);
      })
      .catch((error) => {
        alertBox.className = "alert alert-danger";
        alertBox.textContent =
          "❌ Failed to send request. Please try again.";
        console.error(error);
      });
  });
});
