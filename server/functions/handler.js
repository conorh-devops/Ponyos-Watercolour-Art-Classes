const userController = require("./userController")
const classController = require("./classController")

const statusCodeOk = 200
const statusCodeError = 203

exports.createResponse = ({ statusCode = statusCodeOk, body }) => {

  const response = {
    statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": `http://${process.env.BUCKET_URL}`, //"*"
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: ""
  }

  if (body) {
    if (typeof body === "string") body = { message: body }
    response.body = JSON.stringify(body)
  }

  return response
}

exports.handlerAuth = async (event, _context) => {
  const eBody = JSON.parse(event.body)
  console.log("handlerAuth: eBody", JSON.stringify(eBody))
  const uEmail = event?.requestContext?.authorizer?.claims["email"]
  console.log("handlerAuth: ~ auth.uEmail", uEmail)
  const reqByUser = await userController.getProfile(uEmail)
  console.log("handlerAuth: ~ reqByUser", reqByUser)

  let body = ""
  let statusCode = statusCodeOk
  try {

    if (eBody.eName === "hello") body = "Hello from Auth API"
    else if (eBody.eName === "getProfile") body = await userController.getProfile(uEmail)
    else if (eBody.eName === "updateProfile") body = await userController.updateProfile({ reqByUser, user: eBody.user })
    else if (eBody.eName === "getCourses") body = await classController.getCourses()
    else if (eBody.eName === "getStudents") body = await userController.getStudents(reqByUser)
    else throw new Error("Event error. Code: 32453cfb.")

  } catch (error) {
    console.log("handlerAuth: error", error)
    body = error.message || error
    statusCode = statusCodeError
  }

  const response = exports.createResponse({ statusCode, body })
  console.log("handlerAuth: ~ response:", response)
  return response
}

exports.handlerOpen = async (event, _context) => {
  const eBody = JSON.parse(event.body)
  console.log("handlerOpen: eBody", JSON.stringify(eBody))

  let body = ""
  let statusCode = statusCodeOk
  try {

    if (eBody.eName === "hello") body = "Hello from open API"
    else if (eBody.eName === "signup") body = await userController.signup(eBody.user)
    else throw new Error("Event error. Code: dff0b4cc.")

  } catch (error) {
    console.log("handlerOpen: error", error)
    body = error.message || error
    statusCode = statusCodeError
  }

  const response = exports.createResponse({ statusCode, body })
  console.log("handlerOpen: ~ response:", response)
  return response
}