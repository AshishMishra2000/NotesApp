const getNotes = require("./notes.js")
const validator = require("validator")
const note = getNotes()
console.log(note)

console.log("hello World")
console.log(validator.isEmail("name@example.com"))