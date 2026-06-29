const typed = new Typed("#text", {
  strings: ["   Frontend Dev", "  Backend Dev", "  Fullstack Dev"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
const togglebtn = document.getElementById("toggle-btn");
const navbar = document.getElementById("navbar");
const precen = document.getElementsByClassName("precentage");

const arr = [70, 70, 30, 30];
for (let i = 0; i < precen.length; i++) {
  precen[i].style.width = `${arr[i]}%`;
}
const input = document.getElementsByTagName("input")[0];
if (window.screen.width >= 700) {
  navbar.classList.add("close");
}

var stop = 0;
const typed1 = new Typed("#input1", {
  strings: ["Enter your Name"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: false,
  onStringTyped: function () {
    if (stop <= 2) {
      typed.stop();
    }
  },
});
stop = stop + 1;
const typed2 = new Typed("#input2", {
  strings: ["Enter your Email"],
  typeSpeed: 100,
  backSpeed: 200,
  loop: false,
});
const typed3 = new Typed("#input3", {
  strings: ["Enter your Subject"],
  typeSpeed: 100,
  backSpeed: 300,
  loop: false,
});
const typed4 = new Typed("#input4", {
  strings: ["Enter your Message"],
  typeSpeed: 100,
  backSpeed: 400,
  loop: false,
});
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");
function togglenavbar() {
  navbar.classList.toggle("close");
  togglebtn.classList.toggle("rotate");
  closeallsidebar();
}

const qtyInput = document.getElementById("input1");
qtyInput.addEventListener("focus", () => {
  typed.stop(); // auto-selects the number for quick overwrite
});
input.onfocus = () => {
  typed.stop();
};
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
