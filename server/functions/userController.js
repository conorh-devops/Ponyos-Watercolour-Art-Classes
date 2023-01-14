const {userList} = require("./mockedDB")

exports.validateCredentials = async (email, password) => {
  const user = userList.find(u => {
    return u.email === email && u.password === password
  })
  if (user)
  delete user.password //remove the password

  return user
}

exports.signup = async (user) => {
  if (!user.email)
    throw new Error("Email is required. Code: 3ce64cbf.")

  const index = userList.findIndex(u => u.email === user.email)
  if (index > -1)
    throw new Error("User already registered. Code: 395d3d3b.")

  userList.push(user)

  return true
}

exports.findUser = async (email) => {
  return userList.find(u => u.email === email)
}

exports.findUsersByClassName = async (className) => {
  return userList.filter(u => u.className === className)
}
