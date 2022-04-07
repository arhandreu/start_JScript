const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });


function getPasswordChecker(password) {
    return function checkPassword() {
        rl.question('Введите пароль\n', (answer) => {
             
            console.log(`${answer == password}`);
            rl.close();
        });        
    }
}

const truePassword = getPasswordChecker(12345);
truePassword()

