
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Дякуємо за вашу заявку! Ми зв'яжемось з вами найближчим часом.");
  this.reset();

  
  document.getElementById("contacts").scrollIntoView({ behavior: "smooth" });
});


const productCards = document.querySelectorAll(".product-card");
productCards.forEach(card => {
  card.addEventListener("click", function() {
    productCards.forEach(c => c.classList.remove("highlighted"));
    this.classList.add("highlighted");
    alert(`Ви вибрали: ${this.querySelector("h3").innerText}`);
  });
});
