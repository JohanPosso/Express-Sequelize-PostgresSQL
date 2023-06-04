const ModelUser = require("../models/User.model");
const bcrypt = require("bcrypt");

const insertData = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  const password = await bcrypt.hash(req.body.password, 10);
  try {
    const dataInsert = await ModelUser.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json(dataInsert);
  } catch (error) {
    res.status(400).send(error);
  }
};

const readData = async (req, res) => {
  try {
    const dataRead = await ModelUser.findAll({ order: [["id", "ASC"]] });
    res.json(dataRead);
  } catch (error) {
    res.status(400).send(error);
  }
};

const readDataId = async (req, res) => {
  const id = req.params.id;
  try {
    const dataRead = await ModelUser.findOne({
      where: { id },
    });
    res.json(dataRead);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateData = async (req, res) => {
  const { firstName, lastName } = req.body;
  const id = req.params.id;
  try {
    await ModelUser.update({ firstName, lastName }, { where: { id } });
    res.send(`El Registro con id: ${id}, se atualizo exitosamente`).status(200);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteData = async (req, res) => {
  const id = req.params.id;
  try {
    await ModelUser.destroy({ where: { id } });
    res.send(`El Registro con id: ${id}, se elimino exitosamente`);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { insertData, readData, readDataId, updateData, deleteData };
