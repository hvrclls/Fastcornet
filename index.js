const fs = require('fs')
const inquirer = require('inquirer')


// array of questions for user
const questions = () => inquirer.prompt ([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },    
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Provide description of your project.'
    },    
    {
        type: 'list',
        name: 'projectLicense',
        message: 'What license are you using?',
        choices: ['Apache License 2.0', 'BSD 3-Clause "New" or "Revised" license', 'BSD 2-Clause "Simplified" or "FreeBSD" license', 'GNU General Public License (GPL)', 'GNU Library or "Lesser" General Public License (LGPL)', 'MIT license', 'Mozilla Public License 2.0', 'Common Development and Distribution License', 'Eclipse Public License version 2.0']
    },   
    {
        type: 'input',
        name: 'gitUsername',
        message: 'Enter your GitHub Username.'
    },  
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.'
    },   
])

//![icon for license](${licenseURL})
const generator = (data) => (`# ${data.projectTitle}
## ${data.projectDescription}
## ${data.projectLicense}
${data.gitUsername}
${data.email}`)

questions().then((data) => fs.writeFileSync(`${data.projectTitle}` + '.md', generator(data)))

.then(() => console.log("MD worked"))

.catch((err) => console.log(err))