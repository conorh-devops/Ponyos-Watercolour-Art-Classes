const { userList } = require("../mockedDB")
const AWS = require("aws-sdk")
const cognito = new AWS.CognitoIdentityServiceProvider({ region: process.env.REGION })
const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION })

exports.validateCredentials = async (email, password) => {
  return userList.find(u => u.uEmail === email && u.uPassword === password)
}

async function cognitoCreateUser(user) {
  try {
    return await cognito.adminCreateUser({
      UserPoolId: process.env.COGNITO_USER_POOL_ID,
      Username: user.uEmail,
      TemporaryPassword: user.uPassword,
      MessageAction: "SUPPRESS",
      UserAttributes: [
        { Name: "email_verified", Value: "true" },
        { Name: "email", Value: user.uEmail },
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
      Username: user.uEmail,
      Password: user.uPassword,
      Permanent: true
    }).promise()

  } catch (error) {
    console.log("cognitoAdminSetUserPassword: error", error)
    throw error
  }

}

exports.signup = async user => {
  if (!user.uEmail)
    throw new Error("Email is required. Code: 3ce64cbf.")

  user.uEmail = user.uEmail.toLowerCase()
  try {
    await cognitoCreateUser(user)
    await cognitoAdminSetUserPassword(user)

    user.uId = (Math.round(Date.now() * Math.random())).toString(36)
    user.uCourses = {}

    await dynamoDB.put({
      TableName: process.env.TB_USER,
      Item: { uId: user.uId, uEmail: user.uEmail, uName: user.uName, uCourses: {} }
    }).promise()

    return user
  } catch (error) {
    console.log("signup: error:", error)
    throw error
  }

}

exports.updateProfile = async (user) => {
  if (!user.uEmail)
    throw new Error("Email is required. Code: 988e083c.")

  const index = userList.findIndex(u => u.uEmail === user.uEmail)
  if (index === -1)
    throw new Error("User already registered. Code: c1b88e3c.")

  userList[index].name = user.name
  userList[index].courses = user.courses

  return true
}

exports.getProfile = async (uEmail) => {

  const result = await dynamoDB.query({
    TableName: process.env.TB_USER,
    IndexName: "userByEmail",
    KeyConditionExpression: "uEmail = :uEmail",
    ExpressionAttributeValues: { ":uEmail": uEmail },
    Limit: 1,
  }).promise()

  return result.Count > 0 ? result.Items[0] : null
}

exports.getStudents = async () => {
  return userList.filter(u => !u.uIsAdmin).sort((a, b) => (a.name < b.name ? -1 : 1));
}
