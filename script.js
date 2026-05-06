const waitlistForm = document.querySelector("#waitlist-form");
const successMessage = document.querySelector("#form-success");

if (waitlistForm && successMessage) {
  waitlistForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = waitlistForm.querySelector("button[type='submit']");
    if (submitButton) {
      submitButton.textContent = "You're on the list";
      submitButton.setAttribute("disabled", "true");
    }

    successMessage.hidden = false;
    waitlistForm.reset();
  });
}
