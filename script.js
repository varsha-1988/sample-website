document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleButton");
  const message = document.getElementById("message");

  button.addEventListener("click", () => {
    message.classList.toggle("hidden");

    if (!message.classList.contains("hidden")) {
      button.textContent = "Hide Message";
    } else {
      button.textContent = "Click me!";
    }
  });
});
