const CHECKOUT_URL = "#";

document.querySelectorAll("[data-checkout]").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (CHECKOUT_URL === "#") {
      event.preventDefault();
      alert("Checkout link coming soon.");
      return;
    }

    window.location.href = CHECKOUT_URL;
  });
});
