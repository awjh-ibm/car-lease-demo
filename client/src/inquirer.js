//import { builtinModules } from 'module';

/**
 * List prompt example
 */

'use strict';
const inquirer = require('inquirer');
// const chalkPipe = require('chalk-pipe');


async function functionList() {
    const answer = await inquirer
    .prompt(
        {
        type: 'list',
        name: 'functions',
        message: 'What function do you want to call?',
        choices: [
            'createCar',
            'transferCar',
            new inquirer.Separator(),
            'lease',
            'endLeases',
            'scrapCar'
        ]
        }
    );
    console.log(answer)
    return answer;
    
}

async function selectedFunction(fcn) {
    if (fcn.functions === 'createCar') {
        const questions = [
            {
                type: 'input',
                name: 'manufacturer',
                message: "Which manufacturer made the car"
            },
            {
                type: 'input',
                name: 'colour',
                message: "What colour is the car?"
            },
            {
                type: 'input',
                name: 'model',
                message: "What model is the car?"
            },
        ];

        const answers = await inquirer.prompt(questions);
        console.log(JSON.stringify(answers, null, '  '));
    }

}
async function call() {
    const fcn = await functionList()
    await selectedFunction(fcn)
}

call();
module.exports = functionList;
module.exports = selectedFunction;
