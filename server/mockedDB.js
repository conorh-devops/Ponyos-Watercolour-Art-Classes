exports.userList = [
  {
    id: "d747df7c",
    email: "admin@email.com",
    password: "admin",
    name: "Admin User",
    isAdmin: true
  },
  {
    id: "d7479d6t",
    email: "lily@gmail.com",
    password: "admin",
    name: "Lily Admin",
    isAdmin: true
  },
  {
    id: "763ec5f6",
    email: "john@email.com",
    password: "password",
    name: "John Ferrari",
    courses: {
      "Fujimoto": {
        enrollDt: "2023-01-10T19:33:42.825Z",
        extraTutor: true
      },
      "Gran Mamare": {
        enrollDt: "2023-01-11T19:33:42.825Z",
        extraTutor: true
      },
    },
  },
  {
    id: "9ec0b4eb",
    email: "maria@email.com",
    password: "password",
    name: "Maria Mercedes",
    courses: {
      "Gran Mamare": {
        enrollDt: "2023-01-10T19:33:42.825Z",
        extraTutor: false
      },
    },
  },
  {
    id: "764b2cb7",
    email: "clare@email.com",
    password: "password",
    name: "Clare Williams",
    courses: {
      "Fujimoto": {
        enrollDt: "2023-01-05T19:33:42.825Z",
        extraTutor: false
      },
      "Sosuke": {
        enrollDt: "2023-01-15T19:33:42.825Z",
        extraTutor: false
      },
    },
  },
  {
    id: "28bca9e5",
    email: "james@email.com",
    password: "password",
    name: "James Ford",
    courses: {
      "Gran Mamare": {
        enrollDt: "2023-01-15T19:33:42.825Z",
        extraTutor: true
      },
    },
  },
  {
    id: "56376346",
    email: "rose@email.com",
    password: "password",
    name: "Rose Benetton",
    courses: {
      "Sosuke": {
        enrollDt: "2023-01-23T19:33:42.825Z",
        extraTutor: false
      },
    },
  },

  {
    id: "763ed0aq",
    email: "mindy@gmail.com",
    password: "password",
    name: "Mindy User",
    courses: {
    },
  },
]

exports.courses = {
  "Gran Mamare":
      {
        desc: "Welcome to Gran Mamare, our watercolour sea life class where we dive into the deep blue sea to explore the incredible world of marine creatures.  Our class is designed to help you master the art of watercolour painting while discovering the intricacies and beauty of sea life. From stunning coral reefs to fascinating marine animals, we'll guide you through the process of creating artwork that captures the essence of the ocean. Join us on this journey of creativity and wonder, and let your imagination swim with Gran Mamare!",
        duration: "20",
        price: "29",
      },
  "Fujimoto": {
    desc: "Welcome to Fujimoto, our watercolour nature class where we celebrate the beauty of the natural world through art. Our class is designed to help you master the techniques of watercolour painting, while discovering the intricate details and nuances of nature. From breathtaking landscapes to delicate flora and fauna, we'll guide you through the process of creating stunning artwork that captures the essence of the outdoors. Join us on this journey of creativity and exploration, and unleash your inner artist with Fujimoto!",
    duration: "8",
    price: "12",
  },
  "Sosuke": {
    desc: "Welcome to Sosuke, our watercolour air class where we explore the beauty and wonder of the sky and clouds. Our class is designed to help you develop your skills in watercolour painting, while capturing the essence of the ever-changing elements of the air. From brilliant sunsets to dramatic thunderstorms, we'll guide you through the process of creating breathtaking artwork that captures the majesty of the skies. Join us on this journey of creativity and inspiration, and let your imagination soar with Sosuke!",
    duration: "16",
    price: "22",
  }
}

