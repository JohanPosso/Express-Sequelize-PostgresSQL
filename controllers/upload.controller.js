const multer = require("multer");
const fs = require("fs");

// Buscar en el directorio si existe una carpeta con el nombre uploads
fs.readdir("./", (err, result) => {
  if (err) return console.error(err);
  const resultado = result.find((ele) => ele === "uploads");
  if (resultado) return console.log("Ya existe una carpeta con este nombre");
});

// Poner la carpeta en la que vamos a guardar los archvios
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadData = async (req, res) => {
  const upload = multer({ storage }).single("uploads");

  // Manejo de errores con multer
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("Ocurrio algo");
    } else if (err) {
      console.log("Un error desconocido ocurrió durante la subida", err);

      if (err.code === "ENOENT") {
        fs.mkdirSync("uploads");
      }
    } else {
      console.log("Archivo cargado exitosamente");
    }
  });
  try {
    res.send({ message: "Archivo cargado exitosamente" });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { uploadData };
