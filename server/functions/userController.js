const { userList } = require("../mockedDB")

exports.validateCredentials = async (email, password) => {
  const user = userList.find(u => {
    return u.email === email && u.password === password
  })

  return user
}

exports.signup = async (user) => {
  if (!user.email)
    throw new Error("Email is required. Code: 3ce64cbf.")

  const found = await exports.findUser(user.email)
  if (found)
    throw new Error("User already registered. Code: 395d3d3b.")

  user.id = (Date.now()).toString(36)
  user.courses = {}
  userList.push(user)

  return user
}

exports.updateProfile = async (user) => {
  if (!user.email)
    throw new Error("Email is required. Code: 988e083c.")

  const index = userList.findIndex(u => u.email === user.email)
  if (index === -1)
    throw new Error("User already registered. Code: c1b88e3c.")

  userList[index].name = user.name
  userList[index].courses = user.courses

  return true
}

exports.findUser = async (email) => {
  return userList.find(u => u.email === email)
}

exports.getStudents = async () => {
  return userList.filter(u => !u.isAdmin).sort((a, b) => (a.name < b.name ? -1 : 1));
}
