let calc = document.getElementById("calc");
class oparr {
  constructor(last = null, op = null, first = null, type) {
    this.last = last;
    this.op = op;
    this.first = first;
    this.type = type;
  }
}
ophow = ["*", "-", "/"];
oplow = ["+", "-"];
let result = document.getElementsByTagName("input");
let array = [
  "+",
  "7",
  "8",
  "9",
  "-",
  "4",
  "5",
  "6",
  "*",
  "1",
  "2",
  "3",
  "/",
  "0",
  ".",
  "=",
  "C",
];
let operator = ["+", "-", "*", "/"];
let op = null;
let res = 0;
let last = 0;
// let oparr;

el = "";
arr = [];
let digit = document.createElement("div");
digit.id = "digits";
digit.classList.add("digits");
calc.append(digit);
let digits = document.getElementById("digits");
let styleArray = [
  "display",
  "grid",
  "flex-wrap",
  "wrap",
  "justify-content",
  "center",
  "align-items",
  "center",
  "grid-template-columns",
  "repeat(4,1fr)",
  "text-align",
  "center",
  "gap",
  "1vw",
  "margin",
  "1vw",
];
for (let e = 0; e < styleArray.length; e += 2) {
  const element = array[e];
  digits.style.setProperty(styleArray[e], styleArray[e + 1]);
}

Array.from(array).forEach((e, index) => {
  let n = document.createElement("button");
  n.textContent = e.toString();

  n.style.setProperty("font-size", "3vw");
  n.style.setProperty("cursor", "pointer");
  n.style.setProperty("border", "0");
  n.style.setProperty("font-weight", "bold");
  n.style.setProperty("color", "white");
  if ([0, 4, 8, 12, 16].includes(index) == true) {
    n.style.setProperty("background-color", "#c2e71eab");
    n.onmouseenter = (e) => {
      n.style.setProperty("background-color", "rgb(231, 30, 64)");
    };
    n.onmouseleave = (e) => {
      n.style.setProperty("background-color", "#c2e71eab");
    };
  } else {
    n.style.setProperty("background-color", "rgba(97, 90, 90, 0.67)");
    n.onmouseenter = (e) => {
      n.style.setProperty("background-color", "rgba(97, 90, 90, 1)");
    };
    n.onmouseleave = (e) => {
      n.style.setProperty("background-color", "rgba(97, 90, 90, 0.67)");
    };
  }

  n.style.setProperty("border-radius", "50%");
  n.style.setProperty("width", "7vw");
  n.style.setProperty("height", "7vw");
  n.style.setProperty("transition", "all .5s");

  // n.style.setProperty("transition", "all 3s");
  n.style.setProperty("text-align", "center");
  arr = [];
  n.onclick = () => {
    if (!operator.includes(e)) n.style.setProperty("color", "red");

    debugger;
    if (e == "C") {
      result[0].value = "";
      res = "";
      arr = [];
      // last = "";
      return;
    } else if (e == "=") {
      arr.push(parseInt(el));

      // var op = arr[i];
      // 1+2*2
      res = eval(arr.join("").toString());
      arr = [];
      arr[0] = 0 || res;
      el = "";

      result[0].value = res || 0;
      // arr.forEach((e) => {
      //   result[0].value = e;
      // });
      return;
    } else if (operator.includes(e)) {
      if (el != "") {
        arr.push(parseInt(el));
      }
      arr.push(e);
      el = "";
      // result[0].value = e;
      // return;
      // arr.push_back(el);
    } else if (!operator.includes(e)) {
      el += e;
      // result[0].value = el;
    }
    document.getElementById("results").value += e;
    // res = null;
  };
  n.onmouseover = (e) => {
    n.style.setProperty("width", "7.5vw");
    n.style.setProperty("transform", "translate(0,-3px)");
  };
  n.onmouseleave = (e) => {
    n.style.setProperty("transform", "translate(0,0px)");

    n.style.setProperty("width", "7vw");
  };
  digits.appendChild(n);
  //   document.body.appendChild(n);
});
