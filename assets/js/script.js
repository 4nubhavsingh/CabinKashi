document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const target = document.getElementById(targetId);
      const offset = document.querySelector('.navbar').offsetHeight;

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
    // else: let normal navigation happen
  });
});


// Toggle Payment Section
document.addEventListener("DOMContentLoaded", () => {
  const paymentLink = document.getElementById("payment-link");
  const paymentSection = document.getElementById("payment");

  if (paymentLink && paymentSection) {
    paymentLink.addEventListener("click", function (e) {
      e.preventDefault(); // prevent page reload
      paymentSection.classList.toggle("d-none"); // show/hide section
      paymentSection.scrollIntoView({ behavior: "smooth" }); // scroll to it
    });
  }

  // Floating Action Button Toggle
  const fabMain = document.querySelector(".fab-main");
  const fabOptions = document.querySelector(".fab-options");

  if (fabMain && fabOptions) {
    fabMain.addEventListener("click", () => {
      fabOptions.style.display =
        fabOptions.style.display === "block" ? "none" : "block";
    });
  }
});





