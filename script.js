//  Mobile Navigation Toggle

const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("nav-links");

if (hamburger && navLinks) {

  hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  const allNavLinks = navLinks.querySelectorAll("a");

  for (let i = 0; i < allNavLinks.length; i++) {
    allNavLinks[i].addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  }

}

// Footer Year Update

const yearElements = document.querySelectorAll(".yr");

for (let i = 0; i < yearElements.length; i++) {
  yearElements[i].textContent = new Date().getFullYear();
}

// Flip Cards and Bust Counter 

const flipCards = document.querySelectorAll(".flip-card");
const countEl = document.getElementById("bust-count");
const emojiEl = document.getElementById("counter-emoji");
const allBusted = document.getElementById("all-busted");

if (flipCards.length > 0) {
  let bustedCount = 0; 

  for (let i = 0; i < flipCards.length; i++) {
    flipCards[i].addEventListener("click", function () {
      const inner = this.querySelector(".card-inner");

      if (!inner.classList.contains("flipped")) {
        inner.classList.add("flipped");
        bustedCount = bustedCount + 1;

        if (countEl) {
          countEl.textContent = bustedCount;
        }

        if (emojiEl) {
          if (bustedCount <= 2) {
            emojiEl.textContent = " 👏";
          } else if (bustedCount <= 5) {
            emojiEl.textContent = " 🔥";
          } else if (bustedCount < 8) {
            emojiEl.textContent = " 💪";
          } else {
            emojiEl.textContent = " 🎉";
          }
        }

        if (bustedCount === 8 && allBusted) {
          allBusted.classList.remove("hidden");
          allBusted.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        inner.classList.remove("flipped");
      }
    });
  }
}

// Tips Accordion
const accordionBtns = document.querySelectorAll(".accordion-btn");

if (accordionBtns.length > 0) {

  for (let i = 0; i < accordionBtns.length; i++) {

    accordionBtns[i].addEventListener("click", function () {

      const item = this.parentElement;
      item.classList.toggle("open");

    });
  }
}