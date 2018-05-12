const app = require("./config/express")();
const result = require('dotenv').config();

if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed)