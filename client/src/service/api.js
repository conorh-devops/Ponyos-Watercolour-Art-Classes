
const apiURL = process.env.APIURL || "https://cy6c45vdm5.execute-api.eu-west-1.amazonaws.com/dev/"
console.log("apiURL:", apiURL)


const fetchExec = async (url, eName, params) => {

  if (!params) params = {}

  const body = { eName, ...params }
  const options = {
    method: 'POST',
    headers: {},
    body: JSON.stringify(body)
  }

  if (params.token)
    options.headers["Authorization"] = params.token

  try {
    const resultFetch = await fetch(url, options).catch(error => error)
    const resultJSON = await resultFetch.json()
    const result = { ...resultJSON, status: resultFetch.status }
    return result
  } catch (error) {
    console.log("fetchExec: ~ error:", error)
    throw error
  }
}

const api = {
  /** requests without authentication
   * @param {String} eName event name
   * @param {Object} params parameters
  */
  open: (eName, params) => fetchExec(apiURL + "open", eName, params),
  /** requests that requirer authentication token in params
  * @param {String} eName event name
  * @param {Object} params parameters. Must include token in it
  */
  auth: (eName, params) => fetchExec(apiURL + "auth", eName, params),
}

export default api