const renderHTML = require('./utilities/renderHTML');
// const newmember = require('./newmember.js')
//1 create  test for function that creates an individual team member object that contains their name, position, id number, email, and github
//2 create test for function that prompts user using inquirer to answer questionaire for assembling information about their team.
//3 create test for a function that then takes the responses from the inquirer and then displays them in a brand new HTML document.
//4 Use bootstrap so the html document has uniform styling.
const inquirer = require('inquirer');
const fs = require('fs');
const teamInfo = [];
const hello = "hello";

function Newmember (name, position, id, office, email, github){
    this.name = name;
    this.position = position;
    this.id = id;
    this.office = office;
    this.email = email;
    this.github = github;
    this.member = () => {
        console.log([this.name])
    }
}

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
            // {
            //     type: 'input',
            //     message: 'Write their office number.',
            //     name: 'office',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their email.',
            //     name: 'email',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their identification number.',
            //     name: 'github',
            // },
        ])
        .then((data) => {
            const engineerData = new Newmember(data.name, "Engineer", data.id, data.office, data.email, data.github)
            teamInfo.push(engineerData)
            //push information into the teamInfo array
            addNewOrExit()
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
            // {
            //     type: 'input',
            //     message: 'Write their office number.',
            //     name: 'office',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their email.',
            //     name: 'email',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their identification number.',
            //     name: 'github',
            // },
        ])
        .then((data) => {
            const internData = new Newmember(data.name, "Intern", data.id, data.office, data.email, data.github)
            teamInfo.push(internData)
            //push information into the teamInfo array
            addNewOrExit()
        })
    }

const addNewOrExit = () => {
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
            // {
            //     type: 'input',
            //     message: 'Write their office number.',
            //     name: 'office',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their email.',
            //     name: 'email',
            // },
            // {
            //     type: 'input',
            //     message: 'Write their identification number.',
            //     name: 'github',
            // },

        ])

        .then((data) => {
            const managerData = new Newmember(data.name, "Manager", data.id, data.office, data.email, data.github)
            teamInfo.push(managerData)
            addNewOrExit()
            //push information into the teamInfo array
        })
}

function buildTeam() {
    const collectedData = renderHTML.generateHTML(teamInfo)
    writeToFile('output/index.html', collectedData)
    // console.log(teamInfo);
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
         err ? console.error(err) : console.log('Success! New html file created.')
    )
}


init()