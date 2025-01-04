document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "flex";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  document.getElementById("cart-modal").style.display = "none";
});
