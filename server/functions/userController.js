const {userList} = require("./mockedDB")

exports.validateCredentials = async (email, password) => {
  const user = userList.find(u => {
    return u.email === email && u.password === password
  })
  if (user)
  delete user.password //remove the password

  return user
}

exports.findUser = async (email) => {
  return userList.find(u => u.email === email)
}

exports.findUsersByClassName = async (className) => {
  return userList.filter(u => u.className === className)
}
