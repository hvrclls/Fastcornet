const fs = require('fs')
const inquirer = require('inquire')


// array of questions for user
const questions = () => inquirer.questions ([
    {
        type: 'input',
        name: 'project-title',
        message: 'What is the name of your project?'
    },    
    {
        type: 'input',
        name: 'project-description',
        message: 'Provide description of your project.'
    },    
    {
        type: 'list',
        name: 'project-license',
        message: 'What license are you using?',
        options: ['Apache License 2.0", "BSD 3-Clause "New" or "Revised" license", "BSD 2-Clause "Simplified" or "FreeBSD" license", "GNU General Public License (GPL)", "GNU Library or "Lesser" General Public License (LGPL)", "MIT license", "Mozilla Public License 2.0", "Common Development and Distribution License", "Eclipse Public License version 2.0']
    },   
    {
        type: 'input',
        name: 'git-username',
        message: 'Enter your GitHub Username.'
    },  
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.'
    },   
]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
