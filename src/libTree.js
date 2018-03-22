const treeBtn = document.getElementById("tree-dir");
const li = document.getElementById("tree");
const fs = require('fs');

treeBtn.addEventListener("click", treeDir);

function treeDir() {
  const folder = __dirname;
  var tree = '';

  fs.readdir(folder, (err, files) => {
    files.forEach(file => {
      // console.log(file);
      tree += `<li> ${file} </li>`
    });
      li.innerHTML = tree;
  });

};
