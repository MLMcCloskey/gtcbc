// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================

var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "input",
        message: "What is the average land speed of an african albatross?",
        name: "albatross",
    },
    {
        type: "password",
        message: "What is the password?",
        name: "password"
    },
    {
        type: "list",
        message: "What is in my pocket?",
        choices: ["A rocket", "your mom", "a ring"],
        name: "list"
    },
    {
        type: "checkbox",
        message: "Did you remember to flush?",
        choices: ["down", "up"],
        name: "flush"
    },
    {
        type: "confirm",
        message: "are you sure?",
        name: "confirm",
        default: true
    }
])
.then(function(inquirerResponse){
    if (inquirerResponse.confirm){
        console.log("You're lying. I can smell your butt from here.")
    }
})