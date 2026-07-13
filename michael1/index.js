// let sheet = document.querySelector('link[href*="index.css"]').sheet;

// sheet.insertRule(
//   `#elzero {color: blue;
// padding:2px;
// font-size:7em;
// text-shadow:2px 2px 100px #70CDFB,2px 2px 100px #8152FB,2px 2px 200px #8152FB,2px 2px 300px #8152FB;
// font-weight: bold;
// text-align: center;
// font-family: Arial;
// display:flex;
// justify-content:center;
// align-items:center;

// position:absolute;top:40%;left:40%;transform:translateY(-50%,-50%);    background: linear-gradient(to bottom ,#70CDFB 50%,#8152FB,#070C26);color:transparent; background-clip: text;
//     -webkit-text-fill-color: none;

//     }
//     `,
//   sheet.cssRules.length,
// );

// async function getRandomStrings(topic, count) {
//   try {
//     const api = await fetch(
//       `https://api.datamuse.com/words?rel_syn=${encodeURIComponent(topic)}&max=${count}`
//     );
//     if (!api.ok) throw new Error(`Htpp Error State: ${api.status}`);
//     const data = await api.json();
//     return data.map((e) => e.word);
//   } catch (error) {
//     console.error("error fetching data", error);
//     return [];
//   }
// }
// (async () => {
//   var topic = "group";
//   var relatedwords = await getRandomStrings(topic, 7);
//   console.group("Group1");
//   relatedwords.map((e) => console.log(e));
//   var topic = "child group";
//   var relatedwords = await getRandomStrings(topic, 7);
//   console.group("child Group");
//   relatedwords.map((e) => console.log(e));
//   var relatedwords = await getRandomStrings(topic, 7);
//   console.group("grandChild Group");
//   relatedwords.map((e) => console.log(e));
//   console.groupEnd();
//   console.groupEnd();
//   console.groupEnd();
// })();

// console.log(
//   "%cElzero %cWeb %cSchool",
//   "font-size:40px;color:red;",
//   "font-weight:bold;color:green;font-size:40px;",
//   "color:blue;font-size:40px;font-size:40px;",
// );
// (async ()=>{

//     var relate=await getRandomStrings("play",10);
//     console.table(relate);
// })();

// var s="1";

// var s = String(),
//   c = "";
// var arr = "24z6 1z23 y369 89z 900b".split(" ").map((n) => {
//   ((s = String()), (c = ""));
//   n.split("").forEach((e) => {
//     if (!isNaN(e)) {
//       s += e;
//     } else c = e;
//   });
//   s += c;
//   return s;
// });
// // console.log(arr);
// arr.sort((a, b) => 
//   a.charCodeAt(a.length - 1) == b.charCodeAt(b.length - 1)?0:a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)

// );
// var arr1=arr.map(e=>e.slice(0,e.length-1));
// console.log(arr1);
// var oparr1 = ["+","-","*","/"];
// var result =arr1[0];
// console.log(oparr1);
// for (let i = 1; i < arr1.length ; i++) {
//    result=eval(`${result} ${oparr1[(i-1) % 4]} ${arr1[i]}`);
// //    console.log(result);
// }
// result=Math.ceil(result);
// // console.log(result);
// const res = await fetch("https://de.libretranslate.com/translate", {
//   method: "POST",
//   body: JSON.stringify({
//     q: "سلام",
//     source: "auto",
//     target: "en",
//     format: "text",
//     alternatives: 3,
//     api_key: "",
//   }),
//   headers: { "Content-Type": "application/json" },
// });

// console.log(await res.json());
var ste=40;
var img1 = document.getElementById("img1");
var img2=document.getElementById("img2");
var slide1=document.getElementById("slide1");
var slide2=document.getElementById("slide2");
var slide3=document.getElementById("slide3");
var slide4=document.getElementById("slide4");
var step =40;
// console.log(step);
img1.onclick=()=>{
  // step=ste;
  slide1.style.setProperty("left",`${ste}%`);
  slide2.style.setProperty("left",`${ste}%`);
  slide3.style.setProperty("left",`${ste}%`);
  slide4.style.setProperty("left",`${ste}%`);
// ste*=2;
  // ste=ste<200?ste*2:100;;
  // step=100;
}

img2.onclick = () => {
  // ste=step;
  // step=100;
  // slide1.style.setProperty("left", `-${step}vw`);
  slide1.style.setProperty("left",`-${step}%`);
  slide2.style.setProperty("left",`-${step}%`);
  slide3.style.setProperty("left",`-${step}%`);
  slide4.style.setProperty("left",`-${step}%`);
  // step*=2;
  //  step= step < 300 ? step * 2 : 300;
};



