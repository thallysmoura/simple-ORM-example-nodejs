const User = require('../models/user');

async function createUser(name, email) {
  try {
    const user = await User.create({ name, email });
    return user;
  } catch (error) {
    throw new Error('Error creating user');
  }
}

async function getUserById(id) {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error('User not found');
  }
}

module.exports = {
  createUser,
  getUserById,
};
