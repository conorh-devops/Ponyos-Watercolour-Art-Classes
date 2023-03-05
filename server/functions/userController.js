const AWS = require("aws-sdk")
const cognito = new AWS.CognitoIdentityServiceProvider({ region: process.env.REGION })
const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION })

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

exports.updateProfile = async ({ reqByUser, user }) => {

  if (!reqByUser.uIsAdmin && reqByUser.uEmail !== user.uEmail)
    throw new Error("You don't have permission to access this user. Code: 988e083c.")

  const profile = await exports.getProfile(user.uEmail)

  profile.uName = user.uName
  profile.uCourses = user.uCourses

  await dynamoDB.put({
    TableName: process.env.TB_USER,
    Item: profile
  }).promise()

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

exports.getStudents = async (reqByUser) => {

  if (!reqByUser.uIsAdmin)
    throw new Error("You don't have permission to access this user. Code: f8f3fe98.")

  const result = await dynamoDB.scan({
    TableName: process.env.TB_USER,
    FilterExpression: "attribute_not_exists(uIsAdmin)"
  }).promise()

  return (result.Items || []).filter(user => !user.uIsAdmin)
}
