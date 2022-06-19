const header = document.querySelector("header");
const btnNav = header.lastElementChild;

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});
