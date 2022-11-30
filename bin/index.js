#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
async function numberGuess() {
    var userScore = 0;
    var computerScore = 0;
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        console.log('');
        await inquirer
            .prompt([
            {
                name: 'userInput',
                type: 'number',
                message: 'Guess number from (0-10) ?'
            }
        ])
            .then((value) => {
            if (randomNumber === value.userInput) {
                console.log(chalk.bgGreen(`RIGHT GUESS!`));
                userScore++;
            }
            else {
                console.log(chalk.bgRedBright(`WRONG GUESS!`));
                computerScore++;
            }
        });
    } // for loop code block
    console.log(chalk.bgCyan(`\nSCORE PLAYER vs COMPUTER`), chalk.yellow(`\n\tPlayer = ${userScore}
\tComputer = ${computerScore}`));
    (userScore > computerScore) ? console.log(chalk.bgGreen.bold(`\nYOU WON!!!\n`)) : console.log(chalk.bgRedBright.bold(`\nYOU LOOSE!!!\n`));
}
; //async function numberGuess code block
async function run() {
    do {
        await numberGuess();
        var again = await inquirer
            .prompt([
            {
                name: 'restart',
                type: 'input',
                message: `Do you want to Guess again (y/n)`,
            }
        ]);
    } while (again.restart === 'y' || again.restart === 'Y' || again.restart === 'yes' || again.restart === 'YES');
}
;
run();
