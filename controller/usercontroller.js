///THIS FILE CREATES ALL ROUTES FOR THE USER

const user = require("../models/usermodel");
const httpStatusCodes = require("http-status-codes");

class UserController {
  async getAllUsers(req, res) {
    try {
      const allUsers = await user.find();
      res.status(httpStatusCodes.OK);
      res.send(allUsers);
    } catch (e) {
      res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
      res.send({ message: e.message || "Error Fetching Users" });
    }
  }

  async createUser(req, res) {
    try {
      ////crate new user
      const newUser = await user.create({
        name: "Mollyyy5",
        age: "20",
        email: "mollys@gmail.com",
      });
      res.send(newUser);
      res.status(httpStatusCodes.OK);
      res.send({ message: " SUCCESS Adding New User" });
    } catch (e) {
      res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
      res.send({ message: e.message || " Error Adding New User" });
    }
  }

  async addUser(req, res) {
    try {
      ////crate new user
      const newUser = await user.create({
        name: req.params.name,
        age: req.params.age,
        email: req.params.email,
      });
      res.send(newUser);
      res.status(httpStatusCodes.OK);
      res.send({ message: " SUCCESS Adding New User Using Params" });
    } catch (e) {
      res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
      res.send({ message: e.message || " Error Adding New User" });
    }
  }

  async findByName(req, res) {
    try {
      const nameToFind = req.params.name;
      console.log(nameToFind);
      const userByName = user.find({ name: nameToFind });
      //res.send(userByName);
      res.status(httpStatusCodes.OK);
      res.send({ message: " SUCCESS Finding User By Name" });
    } catch (e) {
      res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
      res.send({ message: e.message || " Error Finding  User" });
    }
  }

  async findAndUpdate(req, res) {
    try {
      const nameToFind = req.params.name;
      console.log(nameToFind);
      user.findOneAndUpdate({ name: nameToFind }, { name: "Maged" });
      //res.send(data);
      res.status(httpStatusCodes.OK);
      res.send({ message: " SUCCESS Updating User By Name" });
    } catch (e) {
      res.status(httpStatusCodes.INTERNAL_SERVER_ERROR);
      res.send({ message: e.message || " Error Updating  User" });
    }
  }
}

module.exports = UserController;
