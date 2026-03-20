const yearElements = document.querySelectorAll(".yr");

for (let i = 0; i < yearElements.length; i++) {
  yearElements[i].textContent = new Date().getFullYear();
}