const readline = require('readline');
const { stdin: input, stdout: output} = require('process');

const rl = readline.createInterface({ input, output });
rl.setPrompt('>');


const linePromise = function(){
    return new Promise((resolve) => {
        rl.on('line', (answer) => {        
            i += 1;
            
        if (isNaN(answer) || 1 > answer > 999) {
            console.log('Введите целое число от 1 до 999');
            console.log(`Попытка ${i}`)
            rl.prompt();
        }
        else if (answer > num) {
            console.log('Загаданное число меньше!');
            console.log(`Попытка ${i}`)
            rl.prompt();
        }
        else if (answer < num) {
            console.log('Загаданное число больше!');
            console.log(`Попытка ${i}`)
            rl.prompt();
        }
        else {
            console.log(`Вы угадали за ${i - 1} попыток(ки)`);
            rl.close();         
        }
        }) 
    })
}


let num = Math.floor(Math.random() * 1000);
console.log(num);

let i = 1

console.log('Попробуйте угадать загаданное число!!')
console.log(`Попытка ${i}`)
rl.prompt();


async function findNumber() {
    const answer = await linePromise();               
}

findNumber();