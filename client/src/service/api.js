
const handler = require("./../../../server/functions/handler")

// eslint-disable-next-line
const fetchMock = (_url, {_method, body}) => handler.handler({ body })

/** This fetch will read the server side files. That's a temporary code, further this mock will be replaced to original fetch
 * @param {String}
 * @param {Object} params
*/
const api = async (eName, params) => {
  if (!params) params = {}
  return fetchMock("/function", {method: "POST", body: JSON.stringify({...params, eName})})
}

export default api