const { courses } = require("../mockedDB")

exports.getCourses = async () => {
  return courses
}