const userModel = require('../models/userModel');
const userView = require('../views/userView');

exports.getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userModel.getUserById(id);
  if (!user) {
    return userView.renderError(res, 404, 'User not found');
  }
  userView.renderUser(res, user);
};

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return userView.renderError(res, 400, 'Name and email are required');
  }
  const newUser = userModel.addUser(name, email);
  userView.renderUser(res, newUser);
}; 