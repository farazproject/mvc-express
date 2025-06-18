// Dummy user data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

function getUserById(id) {
  return users.find(user => user.id === id);
}

function addUser(name, email) {
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name,
    email
  };
  users.push(newUser);
  return newUser;
}

module.exports = { getUserById, addUser };
