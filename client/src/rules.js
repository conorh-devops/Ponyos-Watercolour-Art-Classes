const rules = {
  required: value => !!value || "Required",
  email: value => !value || Boolean(value && value.match(/^\S+@\S+\.\S+$/)) || "Invalid e-mail",
}
export default rules