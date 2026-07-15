// // jesusserver.js
// const fs = require("fs");
// const path = require("path");

// function readFolder(folderpath) {
//   const entries = fs.readdirSync(folderpath, { withFileTypes: true });
//   const result = [];

//   for (let entry of entries) {
//     const fullpath = path.join(folderpath, entry.name);

//     if (entry.isDirectory()) {
//       result.push({
//         folder: entry.name,
//         files: readFolder(fullpath), // يدخل جوه المجلد
//       });
//     } else {
//       result.push(entry.name);
//     }
//   }

//   return result;
// }

// const readfolder = path.join(__dirname, "jesus");
// const folderArr = readFolder(readfolder);

// // اطبع JSON علشان يقرأه المتصفح
// // console.log(JSON.stringify(folderArr, null, 2));

// fs.writeFileSync("data.json", JSON.stringify(folderArr, null, 2));
var carsoul = document.getElementById("carsoul");
fetch("data.json")
  .then((response) => response.json())
  .then((folderArr) => {
    // console.log(folderArr);
    // document.write(folderArr);
    // console.log("folder");
    for (let i = 0; i < folderArr.length; i++) {
      var track = document.createElement("div");
      track.className = "track";
      // var divider = document.createElement("div");
      // divider.className = "divider";
      var span = document.createElement("span");
      span.className = "span";
      var trackl = document.createElement("div");
      trackl.className = "trackl";
      const folder = folderArr[i].folder;
      span.textContent = folder.slice(3, folder.length - 5);
      trackl.appendChild(span);
      for (let j = 0; j < folderArr[i].files.length; j++) {
        var item = document.createElement("div");
        var img = document.createElement("img");
        item.className = "item";
        const file = folderArr[i].files[j];
        img.src = `./jesus/${folder}/${file}`;
        item.appendChild(img);
        img.className = "img";
        track.appendChild(item);
        span.onlick = () => {
          track.style.animationPlayState = "paused";
        };
      }
      // track.appendChild(item);
      trackl.appendChild(track);
      carsoul.appendChild(trackl);

      // const element = folderArr[i].files[j];
    }
    console.log(carsoul);
    // item.appendChild();
    // document.write(arr);
  });
