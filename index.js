const element = window.document.getElementsByClassName("card");
const section = window.document.getElementById("section");
var i = 0;
// section.style.filter = "blur(10px)";

window.addEventListener("load", () => {
  Array.from(element).forEach((e, index) => {
    // e.style.setProperty("filter", "blur(10px)");
    // e.style.transform = "translate(0, 1000px)";
    // e.style.transition = "all 10s ";
    // console.log(i);
    // if (i++ <= 1) {
    // e.style.width =
    // document.getElementsByClassName("product-list")[0].clientWidth + "px";
    // e.style.transform = "translate(0,10%)";
    // e.style.transform = "translate(-30%,-50%)";
    if (index % 2 == 0) {
      e.style.transform = "translatey( -1400px)";
      // e.style.transform = "translatex( 1400px)";
    } else {
      e.style.transform = "translate(0, 1400px)";
    }
    if (index % 2 == 0) {
      e.style.transform = "translate(0, -100px)";
    } else {
      e.style.transform = "translate(0, 100px)";
    }
    e.style.transition = "all 1s ";

    i = 0;
  });
});

Array.from(element).forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.transition = "all 2s ";
    e.style.width = "400px";
    e.style.height = "170px";
    e.style.setProperty("filter", "blur(-10px)");
  });
});
