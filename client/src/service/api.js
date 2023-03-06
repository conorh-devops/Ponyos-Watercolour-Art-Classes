const stage = (process.env.NODE_ENV || "").includes("prod") ? "prod" : "dev"
const apiURL = process.env[`VUE_APP_${stage}_APIURL`]
console.log("apiURL:", apiURL)

const fetchExec = async (url, eName, params, token) => {

  if (!params) params = {}

  const body = { eName, ...params }
  const options = {
    method: 'POST',
    headers: {},
    body: JSON.stringify(body)
  }

  if (token)
    options.headers["Authorization"] = token

  try {
    const resultFetch = await fetch(url, options).catch(error => error)
    const resultJSON = await resultFetch.json()
    const result = { data: resultJSON, ok: resultFetch.status === 200 }
    return result
  } catch (error) {
    console.log("fetchExec: ~ error:", error)
    throw error
  }
}

const api = {
  /** token used in authentications*/
  token: "",
  /** requests without authentication
   * @param {String} eName event name
   * @param {Object} params parameters
  */
  open: (eName, params) => fetchExec(apiURL + "open", eName, params),
  /** authenticated requests
  * @param {String} eName event name
  * @param {Object} params parameters
  */
  auth: (eName, params) => fetchExec(apiURL + "auth", eName, params, api.token),
}

export default api