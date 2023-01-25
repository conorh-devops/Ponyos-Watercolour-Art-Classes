exports.userList = [
  {
    id: "d747df7c",
    email: "admin@email.com",
    password: "admin",
    name: "Admin User",
    isAdmin: true
  },
  {
    id: "763ec5f6",
    email: "john@email.com",
    password: "password",
    name: "John Ferrari",
    courses: {
      "Drawing": "2023-01-10T19:33:42.825Z",
      "Watercolors": "2023-01-11T19:33:42.825Z"
    },
  },
  {
    id: "9ec0b4eb",
    email: "maria@email.com",
    password: "password",
    name: "Maria Mercedes",
    courses: {
      "Watercolors": "2023-01-10T19:33:42.825Z"
    },
  },
  {
    id: "764b2cb7",
    email: "clare@email.com",
    password: "password",
    name: "Clare Williams",
    courses: {
      "Drawing": "2023-01-05T19:33:42.825Z",
      "DYI Arts": "2023-01-15T19:33:42.825Z"
    },
  },
  {
    id: "28bca9e5",
    email: "james@email.com",
    password: "password",
    name: "James Ford",
    courses: {
      "Watercolors": "2023-01-20T19:33:42.825Z"
    },
  },
  {
    id: "56376346",
    email: "rose@email.com",
    password: "password",
    name: "Rose Benetton",
    courses: {
      "DYI Arts": "2023-01-23T19:33:42.825Z"
    },
  },
]

exports.courses = {
  "Watercolors":
  {
    desc: "Working with watercolors allows you to express your artistic sensibilities. Playful and unconventional techniques!",
    duration: "20",
    price: "29",
  },
  "Drawing": {
    desc: "Learn little knowledge in drawing to creating advanced art and having a deep understanding of drawing fundamentals.",
    duration: "8",
    price: "12",
  },
  "DYI Arts": {
    desc: "Plenty of art and craft classes that can help you learn DIY arts and crafts and master it in a step by step way.",
    duration: "16",
    price: "22",
  }
}

