//1 create  test for function that creates an individual team member object that contains their name, position, id number, email, and github
//2 create test for function that prompts user using inquirer to answer questionaire for assembling information about their team.
//3 create test for a function that then takes the responses from the inquirer and then displays them in a brand new HTML document.
//4 Use bootstrap so the html document has uniform styling.
const inquirer = require ('inquirer');
const fs = require ('fs');
// const newmember = require ('./newmember.js')

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

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team's manager's full name?",
        },
        // {
        //     type: 'input',
        //     message: 'Record their identification number.',
        //     name: 'id',
        // },
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

    .then ((data) =>{
        const managerData = new Newmember(data.name, "Manager", data.id, data.office, data.email, data.github)
        console.log(data)
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do next?',
                name: "nextMember1",
                choices: ["Add an engineer","Add an intern", "Exit"],
            },
            {
                type: 'input',
                name: 'name',
                message: "What is your team's manager's full name?",
            },
        ])

        .then ((data2) =>{
                console.log(data2)
    })
    })