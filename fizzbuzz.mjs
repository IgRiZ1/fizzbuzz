import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});


let getal
for(let i = 0 ; i <= 100 ; i ++ ){
    {
        if( i % 3 == 1 ){
            console.log('fizz');
        } else if ( i % 5 ==  1) {
            console.log('buzz')
        } else if ( i % 3 == 0 && i % 5 == 0){
            console.log('fizzbuzz');
            
        }
    }
    console.log(i)
}

process.exit()