const CHECKOUT_URL = "https://pay.hotmart.com/S107542007Y";

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
