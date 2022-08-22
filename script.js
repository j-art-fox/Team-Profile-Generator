const fs = require('fs');
const generateHTML = require('./utilities/renderHTML');
const newmember = require('./utilities/newmember.js')
const inquirer = require('inquirer');
const teamInfo = [];

//TO DO LIST:
//Create  test for function that creates an individual team member object that contains their name, position, id number, email, and github



const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this engineer's full name?",
            },
            {
                type: 'input',
                message: 'Record their identification number.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Write their office number.',
                name: 'office',
            },
            {
                type: 'input',
                message: 'Write their email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Write their GitHub handle.',
                name: 'github',
            },
        ])
        .then((data) => {
            const engineerData = new newmember.Newmember(data.name, "Engineer", data.id, data.office, data.email, data.github)
            teamInfo.push(engineerData)
            //push information into the teamInfo array
            mainMenu()
        })
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is this intern's full name?",
            },
            {
                type: 'input',
                message: 'Record their identification number.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Write their office number.',
                name: 'office',
            },
            {
                type: 'input',
                message: 'Write their email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Write their GitHub handle.',
                name: 'github',
            },
        ])
        .then((data) => {
            const internData = new newmember.Newmember(data.name, "Intern", data.id, data.office, data.email, data.github)
            teamInfo.push(internData)
            //push information into the teamInfo array
            mainMenu()
        })
    }

const mainMenu = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: "nextMember1",
                choices: ["Add an engineer", "Add an intern", "Exit"],
            }
        ])

        .then((data) => {
            if (data.nextMember1 === "Exit") {
                //exit the inquirer and build the team
                buildTeam(data);
                console.log(data)
            }
            if (data.nextMember1 === "Add an engineer") {
                console.log("engineer")
                addEngineer()
            }
            if (data.nextMember1 === "Add an intern") {
                console.log("intern")
                addIntern()
            }
        })
}

const init = () => {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your team's manager's full name?",
            },
            {
                type: 'input',
                message: 'Record their identification number.',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Write their office number.',
                name: 'office',
            },
            {
                type: 'input',
                message: 'Write their email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Write their GitHub handle.',
                name: 'github',
            },

        ])

        .then((data) => {
            const managerData = new newmember.Newmember(data.name, "Manager", data.id, data.office, data.email, data.github)
            teamInfo.push(managerData)
            mainMenu()
            //push information into the teamInfo array
        })
}
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
         err ? console.error(err) : console.log('Success! New html file created.')
    )
}

function buildTeam() {
    const collectedData = generateHTML(teamInfo)
    writeToFile('output/index.html', collectedData)
    console.log(teamInfo);
}



init()