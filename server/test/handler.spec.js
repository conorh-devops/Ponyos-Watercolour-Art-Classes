const { createResponse, handler } = require("./../functions/handler")
const { expect } = require("chai")

describe.skip("handler.js", function () {

  const consoleLog = console.log
  console.log = () => { }

  after(() => {
    console.log = consoleLog
  })

  describe("createResponse", function () {

    it("success - default values", () => {
      const result = createResponse({})
      expect(result.status).to.be.eq(200)
      expect(result.body).to.be.empty
    })

    it("success - custom values", () => {
      const status = 500
      const body = { name: "ABC" }
      const result = createResponse({ status, body })
      expect(result.status).to.be.eq(status)
      expect(result.body).to.be.eql(JSON.stringify(body))
    })

  })

  describe("handler", function () {

    it("eName - invalid", async () => {
      const event = { body: JSON.stringify({ eName: "anyUnrecognizedName" }) }
      const result = await handler(event)
      expect(result.status).to.be.eq(500)
      expect(result.body).to.includes("32453cfb")
    })

    it("eName - hello", async () => {
      const event = { body: JSON.stringify({ eName: "hello" }) }
      const result = await handler(event)
      expect(result.status).to.be.eq(200)
      expect(result.body).to.be.eq("Hello world")
    })

  })

})