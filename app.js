const getNotes = require("./notes.js")
const validator = require("validator")
const chalk = require("chalk")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title:{
            describe: "Note Title",
            demandOption: true,
            type: "string"
        },
        body:{
            describe: "Note Body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log(chalk.green("Title: "+argv.title))
        console.log(chalk.green("Body: "+argv.body))
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log(chalk.red("Removing Note!"))
    }
})

yargs.command({
    command: "list",
    describe: "List notes",
    handler: function () {
        console.log(chalk.yellow("Listing Note!"))
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log(chalk.blue("Reading Note!"))
    }
})


yargs.argv