const inquirer = require('inquirer');
const fs = require('fs');

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
        name: "text-color",
        message: "What color would you like your text: ",
    },
    // Asks user for color of the shape of the logo
    {
        type: "input",
        name: "shape-color",
        message: "What color would you like your shape: ",
    },
    // Asks user for shape of logo
    {
        type: "list",
        name: "shape",
        message: "Please choose your shape: ",
        choices: ["Circle", "Square", "Triangle"],
    }
]

/* STILL WORK IN PROGRESS

// Creates logo.svg file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (error) {
        // If there is an error in creating logo, display error.
        if (error) {
            return console.log(error);
        }
        // Displays when logo has been successfully created.
        console.log('Logo.svg has been created.')
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

*/