const typed = new Typed("#text", {
  strings: ["   Frontend Dev", "  Backend Dev", "  Fullstack Dev"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
const togglebtn = document.getElementById("toggle-btn");
const navbar = document.getElementById("navbar");
if (window.screen.width >= 700) {
  navbar.classList.add("close");
}
function togglenavbar() {
  navbar.classList.toggle("close");
  togglebtn.classList.toggle("rotate");
  closeallsidebar();
}
const text = document.getElementById("text");
function togglesubmenu(button) {
  if (!button.nextElementSibling.classList.contains("show")) closeallsidebar();
  button.nextElementSibling.classList.toggle("show");
  button.classList.toggle("rotate");
  if (navbar.classList.contains("close")) {
    navbar.classList.toggle("close");
    togglebtn.classList.toggle("rotate");
  }
}
function closeallsidebar() {
  Array.from(navbar.getElementsByClassName("show")).forEach((el) => {
    el.classList.remove("show");
    el.nextElementSibling.remove("rotate");
  });
}
