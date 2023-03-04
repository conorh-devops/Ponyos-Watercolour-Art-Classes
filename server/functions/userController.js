const { userList } = require("../mockedDB")
const AWS = require("aws-sdk")
const cognito = new AWS.CognitoIdentityServiceProvider({ region: process.env.REGION })

exports.validateCredentials = async (email, password) => {
  return userList.find(u => u.email === email && u.password === password)
}

async function cognitoCreateUser(user) {
  try {
    return await cognito.adminCreateUser({
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: user.email,
      TemporaryPassword: user.password,
      MessageAction: "SUPPRESS",
      UserAttributes: [
        { Name: "email_verified", Value: "true" },
        { Name: "email", Value: user.email },
      ]
    }).promise()
  } catch (error) {
    console.log("cognitoCreateUser: ~ signup error:", error)
    throw error
  }
}

async function cognitoAdminSetUserPassword(user) {
  try {

    return await cognito.adminSetUserPassword({
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: user.email,
      Password: user.password,
      Permanent: true
    }).promise()

  } catch (error) {
    console.log("cognitoAdminSetUserPassword: error", error)
    throw error
  }
}

exports.signup = async user => {
  if (!user.email)
    throw new Error("Email is required. Code: 3ce64cbf.")

  user.email = user.email.toLowerCase()
  try {
    await cognitoCreateUser(user)
    await cognitoAdminSetUserPassword(user)

    user.id = (Date.now()).toString(36)
    user.courses = {}
    //save on DynamoDB
    // userList.push(user)
    return user
  } catch (error) {
    console.log("signup: error:", error)
    throw error
  }

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
