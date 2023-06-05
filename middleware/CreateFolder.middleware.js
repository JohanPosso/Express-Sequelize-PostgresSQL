const fs = require("fs");

const createFolder = (folderName) => {
  fs.readdir("./", (err, result) => {
    if (err) return console.error(err);
    return resultData(result);
  });

  const resultData = (result) => {
    const resultado = result.find((ele) => ele === folderName);
    if (resultado) {
      console.log("Ya existe una carpeta con este nombre");
    } else {
      fs.mkdirSync(folderName);
    }
    console.log(resultado);
  };
};

// module.exports = createFolder;
