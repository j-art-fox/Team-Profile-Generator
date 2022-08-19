// const newmember = require('./newmember.js')
//1 create  test for function that creates an individual team member object that contains their name, position, id number, email, and github
//2 create test for function that prompts user using inquirer to answer questionaire for assembling information about their team.
//3 create test for a function that then takes the responses from the inquirer and then displays them in a brand new HTML document.
//4 Use bootstrap so the html document has uniform styling.
const inquirer = require('inquirer');
const fs = require('fs');
const teamInfo = [];

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
            const engineerData = new newmember.Newmember(data.name, "Engineer", data.id, data.office, data.email, data.github)
            console.log(JSON.stringify(engineerData))
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
            const internData = new newmember.Newmember(data.name, "Intern", data.id, data.office, data.email, data.github)
            console.log(JSON.stringify(internData))
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
                addIntern()
                console.log("intern")
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
            const managerData = new newmember.Newmember(data.name, "Manager", data.id, data.office, data.email, data.github)
            console.log(data)
            addNewOrExit()
            //push information into the teamInfo array
        })
}

const buildTeam = () => {
    //turn the teamInfo array into  
}

function writeToFile(fileName, data) {

}

init();