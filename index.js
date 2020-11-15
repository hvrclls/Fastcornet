const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Provide description of your project:",
    },
    {
      type: "input",
      name: "projectInstall",
      message: "Provide Installation Steps:",
    },
    {
      type: "input",
      name: "projectUsage",
      message: "Provide usage details:",
    },
    {
      type: "input",
      name: "projectTest",
      message: "Provide testing instructions:",
    },
    {
      type: "input",
      name: "projectContributors",
      message: "Name project contributors:",
    },
    {
      type: "list",
      name: "projectLicense",
      message: "What license are you using?",
      choices: [
        "None",
        "Apache License 2.0",
        'BSD 3-Clause "New" or "Revised" license',
        'BSD 2-Clause "Simplified" or "FreeBSD" license',
        "GNU General Public License v3 (GPL v3)",
        'GNU Library or "Lesser" General Public License v3 (LGPL v3)',
        "MIT license",
        "Mozilla Public License 2.0",
        "Public Domain Dedication and License (PDDL)",
        "Eclipse Public License 1.0",
      ],
    },
    {
      type: "input",
      name: "gitUsername",
      message: "Enter your GitHub Username:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email: ",
    },
  ]);

const generator = (data) =>
  `
  # ${data.projectTitle}

  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Information](#usage)
  * [Test](#test)
  * [Contributors](#contributors)
  * [License](#license)

  
  ## Description

  ${data.projectDescription}

  ## Installation Instructions

  ${data.projectInstall}

  ## Usage Information

  ${data.projectUsage}

  ## Test

  ${data.projectTest}

  ## Contributors

  ${data.projectContributors}

  ## License

  ${data.projectLicense}


  GitHub Profile: https://github.com/${data.gitUsername}

  Email: ${data.email}

    `

;

questions()
  .then((data) =>
    fs.writeFileSync(`${data.projectTitle}` + "README.md", generator(data))
  )

  .then(() => console.log("MD created"))

  .catch((err) => console.log(err));
