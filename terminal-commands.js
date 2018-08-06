const fs = require("fs");

module.exports.ls = () => {
  fs.readdir("./", (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, "");
    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFileSync("newFile.txt");
  console.log("created a new file");
};

module.exports.mkdir = () => {
  fs.mkdirSync("bloc");
  console.log("created a new directory");
};
