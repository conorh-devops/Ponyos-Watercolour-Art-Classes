const userController = require("./userController")

exports.createResponse = ({ status = 200, body }) => {

  const response = {
    status,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*"
    },
    body: ""
  }

  if (body) {
    if (typeof body === "object") body = JSON.stringify(body)
    response.body = body
  }

  return response
}

exports.handler = async (event, _context) => {

  const eBody = JSON.parse(event.body)
  console.log("handler: eBody", JSON.stringify(eBody))

  let body = ""
  let status = 200
  try {

    if (eBody.eName === "hello") body = "Hello world"
    else if (eBody.eName === "login") body = await userController.validateCredentials(eBody.email, eBody.password)
    else throw new Error("Event error. Code: 32453cfb.")

  } catch (error) {
    console.log("handler: error", error)
    body = error.message
    status = 500
  }

  return exports.createResponse({ status, body })
}