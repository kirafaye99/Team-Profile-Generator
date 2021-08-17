const pageGenerator = require('./html');
const fs = require('fs');
const inquirer = require('inquirer');


const manager = require('./manager');
const engineer = require('./engineer');
const intern = require('./intern');

const teamArr = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
        }
    ])
    .then(managerResponse => {
        const {name, id, email, office} = managerResponse;
        const manager = new Manager (name, id, email, office);

        teamArr.push(manager);
        console.log(manager);
    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of the employee?',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's github username?",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does the intern attend?',
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'moreEmployees',
            message: 'Would you like to add any more employees?',
            default: false,
        }
    ])
    .then(employeeResponse => {
        let {name, id, email, role, github, school, moreEmployees} = employeeResponse;
        let employee;

        if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArr.push(employee);

        if (moreEmployees) {
            return addEmployee(teamArr);
        } else {
            return teamArr;
        }
    })
};

const writeFile = data => {
    fs.writeFile('newPage.html', data, err => {
        if (err) {
            console.error(err);
            return;
        } else {
            console.log("Success!! 😊")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArr => {
        return pageGenerator(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.error(err);
    })