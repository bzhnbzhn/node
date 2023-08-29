const readline = require('readline');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function REPL() {
    rl.question('Minimum value: ', (min) => {
        rl.question('Maximum value: ', (max) => {
            const randomNumber = getRandomNumber(parseInt(min), parseInt(max));
            console.log('Random Number:', randomNumber);
            rl.close();
        });
    });
}

REPL();
