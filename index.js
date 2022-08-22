const fs = require('fs')
const generateHTML = require('./src/renderHTML')
const inquirer = require('inquirer')
const teamInfo = []
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


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
            const engineerData = new Engineer(data.name, data.id, data.email, data.github)
            teamInfo.push(engineerData)
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
                message: 'Write their email.',
                name: 'email',
            },
            {
                type: 'input',
                message: 'Write the name of their school.',
                name: 'school',
            },
        ])

        .then((data) => {
            const internData = new Intern(data.name, data.id, data.email, data.school)
            teamInfo.push(internData)
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
                buildTeam(data);
            }
            if (data.nextMember1 === "Add an engineer") {
                addEngineer()
            }
            if (data.nextMember1 === "Add an intern") {
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
            }
        ])

        .then((data) => {
            const managerData = new Manager(data.name, data.id, data.office, data.email)
            teamInfo.push(managerData)
            mainMenu()
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