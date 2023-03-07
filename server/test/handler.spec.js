const { createResponse, handlerOpen } = require("./../functions/handler")
const { expect } = require("chai")

describe("handler.js", function () {

  const consoleLog = console.log
  console.log = () => { }

  after(() => {
    console.log = consoleLog
  })

  describe("createResponse", function () {

    it("success - default values", () => {
      const result = createResponse({})
      expect(result.statusCode).to.be.eq(200)
      expect(result.body).to.be.empty
    })

    it("success - custom values", () => {
      const statusCode = 500
      const body = { name: "ABC" }
      const result = createResponse({ statusCode, body })
      expect(result.statusCode).to.be.eq(statusCode)
      expect(result.body).to.be.eql(JSON.stringify(body))
    })

  })

  describe("handler", function () {

    it("eName - invalid", async () => {
      const event = { body: JSON.stringify({ eName: "anyUnrecognizedName" }) }
      const result = await handlerOpen(event)
      expect(result.statusCode).to.be.eq(203)
      expect(result.body).to.includes("dff0b4cc")
    })

    it("eName - hello", async () => {
      const event = { body: JSON.stringify({ eName: "hello" }) }
      const result = await handlerOpen(event)
      expect(result.statusCode).to.be.eq(200)
      expect(JSON.parse(result.body).message).to.be.eq("Hello from open API")
    })

  })

})