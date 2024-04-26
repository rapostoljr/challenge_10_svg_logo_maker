const inquirer = require('inquirer');
const fs = require('fs');
const createLogo = require('./lib/createLogo');

const questions = [
    // Asks user for test inside of logo
    {
        type: "input",
        name: "text",
        message: "Please enter MAX 3 characters: ",
    },
    // Asks user for color of the text inside of logo
    {
        type: "input",
        name: "text_color",
        message: "What color would you like your text (can also be in hexadecimal): ",
    },
    // Asks user for color of the shape of the logo
    {
        type: "input",
        name: "shape_color",
        message: "What color would you like your shape (can also be in hexadecimal): ",
    },
    // Asks user for shape of logo
    {
        type: "list",
        name: "shape",
        message: "Please choose your shape: ",
        choices: ["Circle", "Square", "Triangle"],
    }
]

// Creates logo.svg file
function writeToFile(fileName, data) {
    let shapeData = createLogo(data);
    fs.writeFile(fileName, shapeData, function (error) {
        // If there is an error in creating logo, display error.
        if (error) {
            return console.log(error);
        }
        // Displays when logo has been successfully created.
        console.log('Genereated logo.svg')
    })
}

// Function to initialize the app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("db/logo.svg", data);
    });
};
// Function call to initialize app
init();

